module.exports = () => {
    function render(json) {
        this.set("Content-Type", "application/json")
        this.body = JSON.stringify(json)
    }
    return async (ctx, next) => {
        ctx.send = render.bind(ctx) // 改变body的作用域
        await next()
    }
}