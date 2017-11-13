setInterval(function(){
    console.log(1);
}, 1000);
var ext = false;;
//按下ctrl+c语法:
process.on('SIGINT', ()=>{
    if(ext) {
        //终止当前进程
        process.exit();
    } else {
        ext = true;
        setTimeout(() => {
            ext = false;
        },1000);
    }
    console.log('按下^C!');
});