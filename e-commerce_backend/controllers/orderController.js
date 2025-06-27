const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  const saved = await newOrder.save();
  res.json(saved);
};

const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

module.exports = { createOrder, getOrders };