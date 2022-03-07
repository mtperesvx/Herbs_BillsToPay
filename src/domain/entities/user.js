const { entity, id, field } = require('@herbsjs/herbs');
const Bill = require('./bills')

const User = 
    entity('User', {
        id: id(Number),
        name: field(String, {
            validation: {allowNull:false}
        }),
        bills: field([Bill]), 
        balance: field(Number)
    })

module.exports = User