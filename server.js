const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const fs = require('fs');
app.use(cors());
const mongoose = require("mongoose")
const nameModel = require("./models/names_schema")
const budgetModel = require("./models/budget_schema")
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';
mongoose.connect(url)
    .then(() => {
        console.log("connected to database")
           
        // let newData = [
        //     { "title": "Eat out", "budget": 150 ,"color":"#ffcd56"},
        //     { "title": "Rent", "budget": 800,"color":"#ff6384" },
        //     { "title": "Grocery", "budget": 200 ,"color":"#36a2eb"},
        //     { "title": "Entertainment", "budget": 300 ,"color":"#fd6b19"},
        //     { "title": "Misc", "budget": 100 ,"color":"#33FFFF"},
        //     { "title": "Transport", "budget": 150 ,"color":"#A033FF"},
        //     { "title": "Education", "budget": 1000,"color":"#33FF6F" },
        //     { "title": "Health and Fitness", "budget": 100,"color":"#FF5733"}
        //   ];
          
        //   budgetModel.insertMany(newData)
        //     .then((data) => {
        //       console.log(data);
        //       mongoose.connection.close();
        //     })
        //     .catch((connectionError) => {
        //       console.log(connectionError);
        //     });  
        
        // // Fetch budget Data from Database
        // budgetModel.find({})
        //     .then((data) => {
        //         console.log(data)
        //         mongoose.connection.close()
        //     })
        //     .catch((connectionError) => {
        //         console.log(connectionError)
        //     })
       
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })

// Reading the JSON file and store its contents in a variable
// let budget = null;
// fs.readFile('budget.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }
//     budget = JSON.parse(data);
//     console.log('JSON data loaded:', budget);
// });
app.get('/budget', (req, res) => {
    budgetModel.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })
   
});
app.use(express.json())

    app.post('/budget', (req, res) => {
        const { title, budget, color } = req.body;
        if (!title || !budget || !color) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
    
        if (!color.match(/^#[0-9A-Fa-f]{6}$/)) {
            return res.status(400).json({ message: 'Color must be in hexadecimal format (#RRGGBB)' });
        }
        const newEntry = new budgetModel({
            title: title,
            budget: budget,
            color: color
        });
    
        newEntry.save()
            .then((data) => {
                res.status(200).json({ message: 'Data added successfully', data: data });
            })
            .catch((error) => {
                res.status(500).json({ message: 'Failed to add data', error: error });
            });
    });

app.use('/', express.static('public'));
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});