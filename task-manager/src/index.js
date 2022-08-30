const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Sit is currenty down. Check back soon!')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


const main = async () => {
    // const task = await Task.findById('630dc26547f42065940ccbed')
    // await task.populate('owner')
    // console.log(task.owner)
    const user = await User.findById('630d95e826bce53c0cedb371')
    await user.populate('tasks')
    console.log(user.tasks)

}
main()

