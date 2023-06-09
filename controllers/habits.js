const { Habit, Profile } = require('../models')

async function create(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const habit = await Habit.create(req.body)
    res.status(201).json(habit)
  } catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function index(req, res) {
  try {
    const habits = await Habit.findAll({
      where: { 
        profileId: req.user.profile.id  
      },
      order: [
        ['id', 'DESC']
      ]})
    res.status(200).json(habits)
  } catch(err){
    res.status(500).json(err)
  }
}

async function update(req, res) {
  try {

    const updateResult = await Habit.update(
      req.body,
      { returning: true, 
        where: { 
          id: req.params.id,
          profileId: req.user.profile.id
      }})
    const habit = updateResult[1][0]
    res.status(200).json(habit)
  } catch(err){
    res.status(500).json(err)
  }
}

async function deleteHabit(req, res) {
  try {
    const numberOfRowsRemoved = await Habit.destroy(
      {         
        where: { 
        id: req.params.id, 
        profileId: req.user.profile.id 
    }})
    res.status(200).json(numberOfRowsRemoved)
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