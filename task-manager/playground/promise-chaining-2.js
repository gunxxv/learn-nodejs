require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62e4d2afa703e29429bdf0fb').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})