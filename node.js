const express = require('express')
const {Router} = require('express')
const app = express()
const router = Router()

router.get('/', (req, res) => {
    res.send(`<h1>我是首页</h1>`)
})

router.get('/about', (req, res) => {
    const {username} = req.query
    res.send(`<h1>我是about</h1>`)
})

router.get() // 我还在开发这个功能模块，不能上线
            // 目前这个模块还得继续修改才能上线


app.use(router)
app.listen(3000)


