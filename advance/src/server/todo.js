import Express from 'express'
import {
  Todos
} from './data/todoList'

const router = Express.Router()

router.get('/todo/list', function (req, res) {
  let mockTodo = Todos.map(todo => {
    return {
      id: todo.id,
      title: todo.title,
      count: todo.records.filter((data) => {
        if (data.checked === false) return true
        return false
      }).length,
      isLocked: todo.isLocked
    }
  })

  res.send([200, {
    todos: mockTodo // 返回状态为200，并且返回todos数据
  }])
})

module.exports = router
