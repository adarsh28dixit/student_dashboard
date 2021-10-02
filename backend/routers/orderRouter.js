import express from 'express';
import Razorpay from 'razorpay'
import Orders from '../models/orderModel.js';


const orderRouter = express.Router();

orderRouter.get('/get-razorpay-key', (req, res) => {
    res.send({
        key: "rzp_test_BogFWhNGiUT1zt"
    });
});

orderRouter.post('/create-order', async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: "rzp_test_BogFWhNGiUT1zt",
        key_secret: "pwOa88jwZBYqHhI3tsLc4dpc",
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  orderRouter.post('/pay-order', async (req, res) => {
    try {
      const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
        req.body;
      const newOrder = Orders({
        isPaid: true,
        amount: amount,
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });
      await newOrder.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  orderRouter.get('/list-orders', async (req, res) => {
    const orders = await Orders.find();
    res.send(orders);
  });

export default orderRouter;