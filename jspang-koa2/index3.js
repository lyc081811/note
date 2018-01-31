const Koa = require('koa');
var app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

app.use(async(ctx) => {
    if(ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = ctx.request.body;
    } else {
        ctx.body = `<h1>404!<h1>`;
    }
})

app.listen(3001, () => {
    console.log('server is starting!')
})
