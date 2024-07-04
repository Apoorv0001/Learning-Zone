const express = require('express');
const app = express();

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

//query parameters
app.get('/', (req, res) => {
const johnKidneys = users[0].kidneys;
const numberOfKidneys = johnKidneys.length;
let numberOfHealthyKidneys = 0;
for( let i = 0; i < johnKidneys; i++){
    if(johnKidneys[i].healthy){
        numberOfHealthyKidneys ++;
    } 
} 
const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.send(`The number of healthy kidneys is ${numberOfHealthyKidneys} and the number of unhealthy kidneys is ${numberOfUnhealthyKidneys}`);
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy});
    res.send('Kidney added successfully');
})

app.put('/', (req, res) => {
for (let i = 0; i < users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
}
res.json({
    message: 'Kidneys are healthy now'
})
})

app.delete('/', (req, res) => {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({  
                healthy: true
        });
        };
    }
    users[0].kidneys = newKidneys;
    res.json({
        message: 'Kidneys are healthy now'
    })
    })

app.listen(3000);