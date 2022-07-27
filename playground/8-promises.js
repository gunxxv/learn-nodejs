const doWorkPromises = new Promise((resolve, rejects) => {
    setTimeout(() => {
        // resolve([7,2,1])
        rejects('Thing went wrong')
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})