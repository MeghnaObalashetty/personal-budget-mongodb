const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';

mongoDBClient.connect(url, (operationError, dbHandler) => {
    if (operationError) {
        console.log("An error has occurred during the connection process ", operationError);
    } else {
        console.log("Connected to database");
        //insert operation
        //dbHandler.close();
        /*
        let data = { id: 5, name: "added a new name from mongodb Native Driver " };
        dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operationError, operationresult) => {
            if (operationError) {
                console.log("unable to insert data into ur collection")

            } else {
                console.log("Insert succesful!!")
                    //dbHandler.close();    
            }

        })

        //List operation
        dbHandler.db('mongodb_demo').collection('names').find().toArray((operationError, operationresult) => {
            if (operationError) {
                console.log(operationError)

            } else {
                for (var i = 0; i < operationresult.length; i++)
                    console.log(operationresult[i])

            }
            dbHandler.close();
        });

        //find one
        dbHandler.db('mongodb_demo').collection('names').findOne({ id: 1 }, (operationError, operationresult) => {
            if (operationError) {
                console.log(operationError)

            } else {
                console.log(operationresult)
                dbHandler.close();
            }
        })
    }
        //update operation
        let filter = { id: 2 };
        let updateDocument = { $set: { name: "added a new name from mongodb Native Driver updated" } };
        dbHandler.db('mongodb_demo').collection('names').updateOne(filter, updateDocument, (operationError, operationresult) => {
            if (operationError) {
                console.log("unable to insert data into ur collection")

            } else {
                console.log("updated  succesful!!")
                dbHandler.close();
            }

        })
    }
        //delete o[peration]
        dbHandler.db('mongodb_demo').collection('names').deleteOne({ id: 2 }, (operationError, operationresult) => {
            if (operationError) {
                console.log("unable to delete data into ur collection")

            } else {
                // console.log(operationresult)
                console.log("deleted  succesful!!")
                dbHandler.close();
            }

        })
    }*/
        //delete o[peration]
        dbHandler.db('mongodb_demo').collection('names').deleteMany({ id: 2 }, (operationError, operationresult) => {
            if (operationError) {
                console.log("unable to delete data into ur collection")

            } else {
                // console.log(operationresult)
                console.log("deleted  succesful!!")
                dbHandler.close();
            }

        })
    }
});