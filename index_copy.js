const Bill = require('./src/domain/entities/bills')
const User = require('./src/domain/entities/user')
const addBill = require('./src/domain/usecases/add_bill')
const deleteBill = require('./src/domain/usecases/delete_bill')
const payTheBill = require('./src/domain/usecases/pay_the_bill')


const dueDate = new Date

const rent = new Bill()
//rent.id = parseInt((Math.random() *10000).toFixed(0))
rent.id = 1
rent.name = 'Aluguel'
rent.price = 2000
rent.dueDate = dueDate
rent.receiver = 'james'

const water = new Bill()
water.id = 2
water.name = 'Conta de agua'
water.price = 150
water.dueDate = dueDate
water.receiver = 'matheus'

const gas = new Bill()
gas.id = 3
gas.name = 'Conta de gas'
gas.price = 120
gas.dueDate = dueDate
gas.receiver = 'othon'

const User1  = new User()
User1.id = parseInt((Math.random() *10000).toFixed(0))
User1.name = "Joaquim"
User1.bills = [gas, water, rent]
User1.balance = 5000

const User2 = new User()
User2.id = parseInt((Math.random() *10000).toFixed(0))
User2.name = "Joana"
User2.bills = [gas, rent]
User2.balance = 7250

const injection = {
    user: User2, 
    bill: water,
  }

const teste = {
    id: 1,
    user: User1
}

// console.log(rent.errors)
// console.log(User2)
//addBill("water", 150, dueDate, 'joao').run()
//console.log(addBill.err)
// console.log(User2)
addBill(injection).run()