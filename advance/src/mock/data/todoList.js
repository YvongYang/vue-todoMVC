import Mock from 'mockjs'

let Todos = []
const COUNT = [1, 2, 3, 4, 5]

for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(Mock.mock({ // 根据数据模板生成模拟数据。
    id: Mock.Random.guid(), // 随机id
    title: Mock.Random.first(), // 随机标题
    isLocked: Mock.Random.boolean(), // 随机锁定
    records: COUNT.map(() => { // 代办单项列表的数据
      return {
        text: Mock.Random.cparagraph(2), // 随机内容
        checked: Mock.Random.boolean() // 是否完成
      }
    })
  }))
}
export { // 导出列表数据
  Todos
}
