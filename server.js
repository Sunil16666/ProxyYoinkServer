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
    if (parseInt(req.query.page) >= 8) return res.json({ data: [] })
    res.json({
        data: getData()
    })
})

app.get('/empty', (req, res) => {
    return res.json({ data: [] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
