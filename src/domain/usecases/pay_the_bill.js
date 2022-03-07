const {usecase, step, Ok, Err} = require('@herbsjs/herbs')
const User = require('../entities/user')
const Bill = require('../entities/bills')
const DeleteBill = require('./delete_bill')

const payBill = (injection) => 
    usecase('Pay Bill', {

    // request: { id: Number },

    // response: Boolean,

    setup: ctx => (ctx.di = Object.assign({}, injection)),

    'Checking if the user can pay the bill': step(async ctx => {
        const found = ctx.di['user'].bills.find(element => element.id == ctx.di['id'])
        if(found == undefined) return Err("Erro, conta nao encontrada")
        if(ctx.di['user'].balance < found.price) return Err('Erro, saldo insuficiente')
    }),

    'Paying the bill': step(async ctx => {
        const found = ctx.di['user'].bills.find(element => element.id == ctx.di['id'])
        ctx.di['user'].balance = ctx.di['user'].balance - found.price
    }),

    'Deleting the bill': step(async ctx => {
        const found = ctx.di['user'].bills.find(element => element.id == ctx.di['id'])
        const del = ctx.di['user'].bills.splice(ctx.di['user'].bills.indexOf(found))
        return Ok()
    })

})

module.exports = payBill