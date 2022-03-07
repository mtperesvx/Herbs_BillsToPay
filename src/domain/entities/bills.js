const { entity, id, field } = require('@herbsjs/herbs');

const Bill =
          entity('bill', {
            id: id(Number),
            name: field(String, {
              validation: {allowNull: false}
            }),
            price: field(Number, {
              validation: {allowNull:false}
            }),
            dueDate: field(Date),
            receiver: field(String, {
              validation: {length: {minimum: 3, maximum: 20}}
            })
          })

module.exports = Bill
