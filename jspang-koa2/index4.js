const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
let home = new Router();
home.get('/todo', async(ctx) => {
  ctx.body = ctx.query;
}).get('/todo2', async(ctx) => {
  ctx.body = 'todo2 page';
})

let page = new Router({
  prefix: '/02'
});
page
  .get("/todo3", async(ctx) => {
    ctx.body = "page page";;
  })
  .get("/todo4", async(ctx) => {
    ctx.body = "page2 page";;
  });
let router = new Router();
router.use(home.routes());
router.use(page.routes());
app.use(router.routes())
app.listen(3000, () => {
  console.log("[demo] server is starting at port 3000");
});
