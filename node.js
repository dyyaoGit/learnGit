const express = require('express')
const {Router} = require('express')
const app = express()
const router = Router()

router.get('/', (req, res) => {
    res.send(`<h1>我是首页</h1>`)
})



app.use(router)
app.listen(3000)


