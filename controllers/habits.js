const { Habit } = require('../models/habit')

async function create(req, res) {
  try {
    req.body
    res.status(201).json()
  } catch(err){
    res.status(500).json(err)
  }
}

async function index(req, res) {
  try {

    res.status(201).json()
  } catch(err){
    res.status(500).json(err)
  }
}

async function update(req, res) {
  try {

    res.status(201).json()
  } catch(err){
    res.status(500).json(err)
  }
}

async function deleteHabit(req, res) {
  try {

    res.status(201).json()
  } catch(err){
    res.status(500).json(err)
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteHabit,
}