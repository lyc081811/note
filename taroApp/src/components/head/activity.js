import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './activity.less'
class Activity extends Component {
  constructor() {
    super()
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            {total: 48, cut: 10},
            {total: 58, cut: 20},
            {total: 100, cut: 30},
          ]
        }
      ]
    }
  }
  getTxtByType (type) {
    switch(type) {
      case 'cut':
          return '减'
          break;
      default:
        return '减'
        break;
    }
  }
  render () {
    let {activity:[firstItem]} = this.state
    return (
      <View className="activity">
        <Text className="type">{this.getTxtByType(firstItem.type)}</Text>
        <Text>{
          firstItem.info.map(item => {
            return <Text>满{item.total}{this.getTxtByType(firstItem.type)}{item.cut};</Text>
          })
        }</Text>
        <Text className="length">{firstItem.info.length}个活动</Text>
      </View>
    )
  }
}
export default Activity
