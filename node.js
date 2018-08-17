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

router.post('/login', (req, res) => {
    const {username, pwd} = req.body
    if(username === 'dyyao'&&pwd === '123') {
        res.send('master登录成功了')
    }
    else {
        res.send('用户名密码不正确，请检查您的输入是否正确')
    }

})


app.use(router)
app.listen(3000)


