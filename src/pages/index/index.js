import Alien, { Component } from 'alienjs'
import { View, Text, Input, Button, Image } from '@jd/alien-components'
import './index.scss'

import { diao } from '../../utils'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      todos: [],
      githubList: [],
      inputTodoValue: '',
      imagesList: [
        'https://m.360buyimg.com/babel/jfs/t19189/259/982422064/89206/94ed5482/5ab4f6cbNd323ee06.jpg',
        'https://img1.360buyimg.com/da/jfs/t14950/329/2565843691/99347/46a6681f/5ab21540N21d5240c.jpg'
      ]
    }
  }

  addTodoClick = () => {
    Alien.request(`https://api.github.com/search/repositories?q=${this.state.inputTodoValue}`)
      .then((res) => {
        this.setState({
          githubList: res.items
        })
      })
    this.addTodo({
      createTime: new Date().getTime(),
      title: this.state.inputTodoValue
    })
  }

  addTodo (todoItem) {
    const todos = this.state.todos.concat()
    todos.push(todoItem)
    this.setState({
      todos
    })
  }

  setTodoValue = e => {
    this.changeTimer && clearTimeout(this.changeTimer)
    this.changeTimer = setTimeout(() => {
      this.setState({
        inputTodoValue: e.target.value
      })
    }, 100)
  }

  deleteTodo (index, e) {
    e.preventDefault()
    const todos = this.state.todos.concat()
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  render () {
    return (
      <View className='todo'>
        <View>
          <Image src={this.state.imagesList[0]} />
        </View>
        <View><Text>12</Text></View>
        <View className='todo_add'>
          <Input className='todo_add_input' type='text' onInput={this.setTodoValue} />
          <Button className='todo_add_btn' onClick={this.addTodoClick}>添加</Button>
        </View>
        <View className='list'>
          {this.state.todos.map((item, index) => {
            return <View className='list_item'>
              <Text>{item.title}</Text>
              <Button className='dele_btn' onClick={this.deleteTodo.bind(this, index)}>x</Button>
            </View>
          })}
        </View>
        <View className='github_list'>
          {this.state.githubList.map((result, index) => {
            return (
              <View class='result'>
                <View>
                  <Text>{result.full_name}</Text>
                  🌟<Text>{result.stargazers_count}</Text>
                </View>
                <Text>{result.description}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

