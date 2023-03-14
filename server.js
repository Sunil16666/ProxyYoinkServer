const express = require('express')
const app = express()
const { faker } = require('@faker-js/faker');
const port = process.env.PORT || 3003

const getData = () => {
    let data = []
    for (let i = 0; i < 10; i++) {
        data.push({
            ip: faker.internet.ip(),
            port: faker.internet.port(),
            protocols: [faker.internet.protocol()],
        })
    }
    return data
}

app.get('/', (req, res) => {
    if (Math.random() < 0.20) return res.json({ data: [] })
    res.json({
        data: getData()
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
