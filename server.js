var koa = require("koa")
var serve = require("koa-static")

var app = koa()

console.log(__dirname)
app.use(serve(__dirname))

app.listen(8080)