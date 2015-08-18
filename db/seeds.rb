# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Task.create({
  description: 'recurring, not braindump',
  starts_at: '2014-10-10T08:00:00.000Z',
  repeat_times: 5,
  })

Completion.create({
  task_id: 1,
  completed_at: '2014-10-12'
  })

Completion.create({
  task_id: 1,
  completed_at: '2014-10-13'
  })

Task.create({
  description: 'scheduled, not braindump',
  starts_at: '2014-10-10T12:00:00.000Z',
  })

Completion.create({
  task_id: 2,
  completed_at: '2014-11-12'
  })

Task.create({
  description: 'Salsa Dancing',
  starts_at: '2014-10-10T17:00:00.000Z',
  repeat_times: 1,})

Completion.create({
  task_id: 3,
  completed_at: '2014-12-12'
  })

Task.create({
  description: 'this should only show up in braindump'
  })
