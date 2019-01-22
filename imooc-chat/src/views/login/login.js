import React from 'react'
import Logo from '../../components/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank,Button } from 'antd-mobile'
class Login extends React.Component {
    constructor () {
        super()
        this.state = {
            user: '',
            pwd: ''
        }
    }
    handleLogin () {
        alert(1)
    }
    handleRegister () {
        this.props.history.push('/register')
    }
    handleChange (key, value) {
        this.setState({
            [key]: value
        })
    }
    render () {
        return (
            <div className="login-container">
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem clear placeholder="请输入用户名" onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                        <InputItem clear type="password" placeholder="请输入密码" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login