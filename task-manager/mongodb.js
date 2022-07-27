//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjactID = mongodb.OpjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
   
    // db.collection('users').deleteMany({
    //     age: 1000
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    
    
    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})



