import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import {
  Todos
} from './data/todoList'

export default {
  start () { // 初始化函数
    let mock = new MockAdapter(axios) // 创建 MockAdapter 实例

    mock.onGet('/todo/list').reply(config => { //  config 指 前台传过来的值
      let mockTodo = Todos.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          count: todo.records.filter((data) => {
            if (data.checked === false) return true
            return false
          }).length,
          isLocked: todo.isLocked
          // isDelete: todo.isDelete
        }
      })

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo // 返回状态为200，并且返回todos数据
          }])
        }, 200)
      })
    })

    // 新增一条todo
    mock.onPost('/todo/addTodo').reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isLocked: false
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: Todos
          }])
        }, 200)
      })
    })

    mock.onGet('todo/id').reply(config => {
      const id = config.params
      let todo = Todos.find(todo => id && todo.id === id)

      if (todo) {
        todo.count = todo.records.filter(i => i.checked === false).length
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todo: todo || {}
          }])
        }, 200)
      })
    })

    mock.onPost('todo/addRecord').reply((config) => {
      const {text, id} = config.params
      const todo = Todos.find(todo => id && todo.id === id)

      todo.records.push({
        id: Mock.Random.guid(),
        text: text,
        checked: false
      })

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: Todos
          }])
        }, 200)
      })
    })
  }
}
