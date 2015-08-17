# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Task.create({
  description: 'Gym',
  starts_at: '2014-10-10',
  repeat_times: 5,
  repeats_every: "day",
  })

Completion.create({
  task_id: 1,
  completed_at: '2014-10-12'
  })
Task.create({
  description: 'Read',
  starts_at: '2014-11-10',
  repeat_times: 1,
  repeats_every: "day"
  })

Completion.create({
  task_id: 2,
  completed_at: '2014-11-12'
  })

Task.create({
  description: 'Salsa Dancing',
  starts_at: '2014-12-10',
  repeat_times: 1,
  repeats_every: "week"})

Completion.create({
  task_id: 1,
  completed_at: '2014-12-12'
  })


  


