const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=a90e956f007242307f8ee34bcd2516f2&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk,toString() 
    })
    response.on('end', () => {
       const body = JSON.parse(data) 
       console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()