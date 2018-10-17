import React, {Component} from 'react'
class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            userName: '',
            content: ''
        }
    }
    handleUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }
    handleContente(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const {userName, content} = this.state
            this.props.onSubmit({userName, content})
        }
        this.setState({
            content: ''
        })
    }
    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={this.state.userName} onChange={this.handleUserName.bind(this)}/>
                </div>
                </div>
                <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea value={this.state.content} onChange={this.handleContente.bind(this)}/>
                </div>
                </div>
                <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                    发布
                </button>
                </div>
            </div>
        )
    }
}
export default CommentInput
