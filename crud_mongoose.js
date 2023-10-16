const mongoose = require("mongoose")
const nameModel = require("./models/names_schema")
const budgetModel = require("./models/budget_schema")
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';
mongoose.connect(url)
    .then(() => {
        console.log("connected to database")
            //List all entries
            // nameModel.find({})
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            //fetch one document
            // nameModel.find({ id: 2 })
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            // nameModel.findById("65261ead16a64a019bfec302")
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            //insert entry
            // let newData = new nameModel({ id: 10, name: "testing mongoose" });
            // nameModel.insertMany(newData)
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
            //update
            // let newData = { $set: { id: 10, name: "updated testing mongoose" } };
            // nameModel.updateOne({ id: 10 }, newData)
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //     })
        //     //remove
        // nameModel.deleteOne({ id: 3 })
        //     .then((data) => {
        //         console.log(data)
        //         mongoose.connection.close()
        //     })
        //     .catch((connectionError) => {
        //         console.log(connectionError)
        //     })
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
        // budgetModel.deleteMany()
        //     .then((data) => {
        //         console.log(data)
        //         mongoose.connection.close()
        //     })
        //     .catch((connectionError) => {
        //         console.log(connectionError)
        //     })
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