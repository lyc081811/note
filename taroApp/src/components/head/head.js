import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Top from './top'
import Activity from './activity'
import './head.less'
class Head extends Component {
  constructor(){
    super()
    this.state = {
      store: {
        title: '川湘居',
        notice: '欢迎光临，很高相为您服务~',
        tags: ['味道赞', '主食真好', '分量足']
      }
    }
  }
  render () {
    let {store} = this.state
    return (
      <View className="head">
        <Top/>
        <Image className="back" src={require('../../assets/img/food.png')}/>
        <View className="store">
          <Image className="store_img" src={require('../../assets/img/food.png')}/>
          <View className="store_txt">
            <Text>{store.title}</Text>
            <Text className="desc">{store.notice}</Text>
            <View>
              {store.tags.map((item, index) => {
                return <Text className="tags_txt" key={index}>{item}</Text>
              })}
            </View>
          </View>
        </View>
        <Activity></Activity>
      </View>
    )
  }
}
export default Head
