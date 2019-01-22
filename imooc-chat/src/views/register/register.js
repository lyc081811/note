import React from 'react'
import Logo from '../../components/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank,Button,Radio } from 'antd-mobile'



class Register extends React.Component {
    constructor () {
        super()
        this.state = {
            type: 1,
            user: '',
            pwd: '',
            rePwd: ''
        }
    }
    handleLogin () {
        this.props.history.push('/login')
    }
    handleRegister () {
        alert(1)
    }
    handleChange (key, value) {
        this.setState({
            [key]: value
        })
    }
    changeType (type) {
        // console.log(type)
        // this.setState({
        //     type
        // })
        alert(1)
    }
    render () {
        const types = [
            {value: 1, title: 'BOSS'},
            {value: 2, title: '牛人'}
        ]
        const RadioItem = Radio.RadioItem
        return (
            <div className="login-container">
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem clear placeholder="请输入用户名" onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                        <InputItem clear type="password" placeholder="请输入密码" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                        <InputItem clear type="password" placeholder="请再次输入密码" onChange={v => this.handleChange('rePwd', v)}>确认密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    {
                        types.map(x => {
                            return (
                                <RadioItem key={x.value} checked={x.value === this.state.type} onChange={() => this.handleChange(x.value)}>{x.title}</RadioItem>
                            )
                        })
                    }
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
                </WingBlank>
            </div>
            
        )
    }
}
export default Register