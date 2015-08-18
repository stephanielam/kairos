# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Tasks
Task.create({
  description: 'Gym',
  starts_at: '2014-10-10',
  repeat_times: 5,
  repeats_every: "day",
})

Task.create({
  description: 'Read',
  starts_at: '2014-11-10',
  repeat_times: 1,
  repeats_every: "day"
})

Task.create({
  description: 'Yoga',
  starts_at: '2014-12-10',
  repeat_times: 1,
  repeats_every: "week"
})

Task.create({
  description: 'Code',
  repeat_times: 5,
  repeats_every: "week"
})

Task.create({
  description: 'Buy groceries',
})

Task.create({
  description: 'Email boss',
})

Task.create({
  description: 'Buy presents for Stephanie',
  repeat_times: 5,
  repeats_every: "week"
})

Task.create({
  description: 'Feed Stephanie',
  repeat_times: 50,
  repeats_every: "week"
})

# Completed
Completion.create({
  task_id: 1,
  completed_at: '2014-10-12'
})

Completion.create({
  task_id: 1,
  completed_at: '2014-12-12'
})

Completion.create({
  task_id: 1,
  completed_at: '2014-12-12'
})
  
Completion.create({
  task_id: 2,
  completed_at: '2014-11-12'
})

Completion.create({
  task_id: 7,
  completed_at: '2014-10-14'
})

Completion.create({
  task_id: 7,
  completed_at: '2014-10-15'
})

Completion.create({
  task_id: 7,
  completed_at: '2014-10-16'
})

Completion.create({
  task_id: 8,
  completed_at: '2014-10-12'
})

Completion.create({
  task_id: 8,
  completed_at: '2014-10-14'
})

Completion.create({
  task_id: 8,
  completed_at: '2014-10-17'
})

Completion.create({
  task_id: 8,
  completed_at: '2014-10-20'
})

