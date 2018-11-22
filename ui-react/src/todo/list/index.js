import React, {Component} from 'react'

class List extends Component {
    render () {
        const list = this.props.list
        return(
            <ul>
                {
                    list.map((x, i) => {
                        return <li key={i}>{x}</li>
                    })
                }
            </ul>
        )
    }
}
export default List
