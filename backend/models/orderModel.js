import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: String,
        paymentId: String,
        signature: String,
    },
})

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;