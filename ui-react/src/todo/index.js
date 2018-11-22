import React, {Component} from 'react'
import List from './list'
import Input from './input'

class Todo extends Component {
    constructor () {
        super()
        this.state = {
            list: [1]
        }
    }
    addTitle(txt) {
        const currentList = this.state.list
        this.setState({
            list: currentList.concat(txt)
        })
    }
    render() {
        return (
            <div>
                <p>this is todo List</p>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List list={this.state.list}></List>
            </div>
        )
    }
}
export default Todo
