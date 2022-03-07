const {usecase, step ,Ok, Err} = require('@herbsjs/herbs')
const Bill = require('../entities/bills')

const deleteBill = (injection) =>

    usecase('Delete Bill', {

    //request: { id: Number },

    //response: Boolean,

    setup: ctx => (ctx.di = Object.assign({}, injection)),

    // authorize: async user => (user.CanDeleteBill ? Ok() : Err()),

    'Checking if the Bill exists': step(ctx => {
        const found = ctx.di['user'].bills.find(element => element.id == ctx.di['id'])
        if(found == undefined) return Err("Erro, conta nao encontrada")
    }),

    'Deleting the Bill': step(ctx => {
        const found = ctx.di['user'].bills.find(element => element.id == ctx.di['id'])
        const del = ctx.di['user'].bills.splice(ctx.di['user'].bills.indexOf(found))
        return Ok("Sucesso, conta apagada")
    })

})

module.exports = deleteBill