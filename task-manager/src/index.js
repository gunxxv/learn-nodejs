const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)            
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

})

app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((user) => {
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await findById(_id)

        if (!user) {
            return res.status(404).send(user)
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.status(200).send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.post('/tasks', (req, res) => {
   const task = new Task(req.body)

   task.save().then(() => {
       res.status(201).send(task)
   }).catch((e) => {
       res.status(400).send(e)
   })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((task) => {
        res.status(200).send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res) =>{
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})