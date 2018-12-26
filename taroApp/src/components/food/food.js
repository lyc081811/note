import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import { AtTabs, AtTabsPane } from 'taro-ui'
import './food.less'
import ''
class Head extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     current: 0
  //   }
  // }
  // handleClick (value) {
  //   this.setState({
  //     current: value
  //   })
  // }
  render () {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className="food">
        {/* <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>

        </AtTabs> */}
      </View>
    )
  }
}
export default Head
