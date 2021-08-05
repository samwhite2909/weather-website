const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=0aeaa162456e8c6728349b80522dd193&query=' + latitude + ',' + longitude + '&units=m';
    
    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service.');
        }
        else if(body.error){
            callback('Unable to find location.');
        }
        else{
            callback(undefined, 
                'It is ' + body.current.weather_descriptions[0] + ', the temperature is ' + 
                body.current.temperature + ' degrees, it will feel like ' + body.current.feelslike + ' degrees.'
            )
        }
    });
}

module.exports = forecast;