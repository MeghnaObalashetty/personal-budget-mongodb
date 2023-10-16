const mongoose = require('mongoose')
const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /^#([0-9A-Fa-f]{6})$/.test(v);
          },
          message: (props) => `${props.value}`
        }
      }
}, { collection: 'budget' })
module.exports = mongoose.model('budget', budgetSchema)