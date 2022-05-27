const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a90e956f007242307f8ee34bcd2516f2&query=' + latitude + ',' + longitude + '&units=f'
    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to fine location. Try another coordinate.', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                weather_descriptions: body.current.weather_descriptions[0],
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast 