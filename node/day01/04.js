// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

var q = '请出入用户名:'
var users = {
    'admin': '123',
    'user1': '321',
    'user2': '213'
};
var username = '';
process.stdout.write(q + '\n');
//去接收用户输入
process.stdin.on('data',(input) => {
    //input是一个流(二进制数组)
    //输入的字符最后是一个回车符,且是object类型
    input = input.toString().trim();
    // process.stdout.write(q + '\n');
    //获取一个键值对中所有的键
    if(!username) {
        if (Object.keys(users).indexOf(input) === -1) {
            //用户名不存在
            process.stdout.write('用户名不存在' + '\n');
            process.stdout.write(q + '\n');
            username = '';
        } else {
            //存在
            process.stdout.write('请输入密码: ');
            username = input;
        }
    } else {
        //密码的判断,需要知道上次输入的结果;
        if(input == users[username]) {
            console.log('登录成功')
        } else {
            process.stdout.write('密码错误,请再次输入密码:');
        }
    }
   
});
//当出现回车符出现,就触发
// process.stdin.on('data', (data) => {
//     process.stdout.write(data);
// });
