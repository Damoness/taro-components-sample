import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class About extends Component {
  config = {
    navigationBarTitleText: 'about'
  }

  constructor () {
    super(...arguments)
    this.state = {
      text: 'about'
    }
  }

  componentDidMount () {
    console.log('about mount')
  }

  componentDidShow () {
    console.log('about show')
  }

  componentDidHide () {
    console.log('about hide')
  }

  componentWillUnmount () {
    console.log('about unmount')
  }

  render () {
    const text = this.state.text
    return (
      <View className='about'>
        <Text>{text}</Text>
      </View>
    )
  }
}

