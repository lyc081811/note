const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");

let home = new Router();
home
  .get("/jspang", async ctx => {
    ctx.body = "Home JSPang";
  })
  .get("/todo", async ctx => {
    ctx.body = "Home ToDo";
  });

let page = new Router({
    prefix: '/page'
});
page
  .get("/jspang", async ctx => {
    ctx.body = "Page JSPang";
  })
  .get("/todo", async ctx => {
    ctx.body = "Page ToDo";
  });

//装载所有子路由
let router = new Router();
router.use("/home", home.routes());
router.use(page.routes());

//加载路由中间件
app.use(router.routes());

app.listen(3000, () => {
  console.log("[demo] server is starting at port 3000");
});
