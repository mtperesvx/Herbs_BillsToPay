const {usecase, step ,Ok, Err} = require('@herbsjs/herbs')
const User = require('../entities/user')
const Bill = require('../entities/bills')

const addBill = (injection) => 
  usecase('Add bill to account user', {
    
  
    setup: ctx => (ctx.di = Object.assign({}, injection)),

  
    'Check if the bill already exists': step(
      ctx=>{
        ctx.user = ctx.di['user']
        ctx.bill = ctx.di['bill']

        const validatioBill = (ctx.user.bills.find(element=> element.id == ctx.bill.id))
        if(validatioBill){
          console.log('Error: This bill already exists')
          return Err()
        }
          return Ok()
      }
    ),

    'Add bill to account': step(
       
      ctx=>{
        ctx.user.bills.push(ctx.bill)
        console.log(ctx.user)
        return Ok()
      }
    )

  })

  module.exports = addBill