# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Todo.create(name: "Code", completed: Date.new(), recurring_id: 1)
Todo.create(name: "Code", completed: nil, recurring_id: 1)
Todo.create(name: "Buy more dogs", completed: Date.new(), recurring_id: 2)
Todo.create(name: "Buy more dogs", completed: Date.new(), recurring_id: 2)
Todo.create(name: "Buy more dogs", completed: nil, recurring_id: 2)
Todo.create(name: "Final project", completed: nil, recurring_id: 3)
Todo.create(name: "Buy groceries", completed: nil, recurring_id: 4)
Todo.create(name: "Call cornelius", completed: nil, recurring_id: 5)
Todo.create(name: "Play with dog", completed: nil, recurring_id: 6)
Todo.create(name: "Gym", completed: nil, recurring_id: 7)
Todo.create(name: "Create facebook", completed: nil, recurring_id: 8)
Todo.create(name: "Walk dog", completed: nil, recurring_id: 9)

Recurring.create(times: 10)
Recurring.create(times: 3)
Recurring.create(times: 5)
Recurring.create(times: 1)
Recurring.create(times: 1)
Recurring.create(times: 1)
Recurring.create(times: 1)
Recurring.create(times: 1)
Recurring.create(times: 1)