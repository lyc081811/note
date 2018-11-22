import React, {Component} from 'react'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
        }
    }
    handleChange (e) {
        this.setState({
            title: e.target.value
        })
    }
    handleSub () {
        const title = this.state.title
        const addTitle = this.props.addTitle
        addTitle(title)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleSub.bind(this)}>submit</button>
            </div>
        )
    }
}
export default Input
