const { Schema, models, model } = require("mongoose");

const ModelSchema =  new Schema({
data:Array
})

const Order = models.order || model("order",ModelSchema);
export default Order;