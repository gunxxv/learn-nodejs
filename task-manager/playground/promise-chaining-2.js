require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62e815f8cc087277739bc116').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed:false })
    return count
}

deleteTaskAndCount('62e815f8cc087277739bc116').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})