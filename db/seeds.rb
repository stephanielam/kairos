TaskModel.create({          #1
  description: 'Weekly manscaping',
  repeat_times: 5,
  })

TaskInstance.create({
  task_model_id: 1,
  starts_at: '2015-08-19T08:00:00.000Z',
  completed_at: '2015-08-19T16:00:00.000Z'
  })

TaskInstance.create({
  task_model_id: 1,
  starts_at: '2015-08-20T09:00:00.000Z'
  })

TaskModel.create({          #2
  description: 'Call Mama'
  })

TaskInstance.create({
  task_model_id: 2,
  starts_at: '2015-08-22T13:00:00.000Z',
  completed_at: '2015-08-25T17:00:00.000Z'
  })

TaskModel.create({          #3
  description: 'Salsa Dancing',
  repeat_times: 1
  })

TaskInstance.create({
  task_model_id: 3,
  starts_at: '2015-08-20T18:00:00.000Z'
  })

TaskModel.create({          #4
  description: 'Have to meet ScarJo someday.  It is a must!'
  })

TaskInstance.create({
  task_model_id: 4
  })

TaskModel.create({          #5
  description: 'Finish pruning the damn roses'
  })

TaskInstance.create({
  task_model_id: 5,
  starts_at: '2015-08-19T09:00:00.000Z'
  })

TaskModel.create({          #6
  description: 'Day trip to Seattle'
  })

TaskInstance.create({
  task_model_id: 6,
  starts_at: '2015-08-20T09:00:00.000Z'
  })

TaskModel.create({          #7
  description: 'Paint the next Mona Lisa'
  })

TaskInstance.create({
  task_model_id: 7,
  starts_at: '2015-08-21T09:00:00.000Z'
  })

TaskModel.create({          #8
description: 'Found Billion Dollar Start Up'
  })

TaskInstance.create({
  task_model_id: 8,
  starts_at: '2015-08-22T09:00:00.000Z'
  })

TaskModel.create({          #9
  description: 'Go Fishing',
  repeat_times: 2,
  })

TaskInstance.create({
  task_model_id: 9
  })

TaskModel.create({
  description: 'Pump Iron',
  repeat_times: 3
  })

TaskInstance.create({
  task_model_id: 10,
  starts_at: '2015-08-23T09:00:00.000Z'
  })

TaskInstance.create({
  task_model_id: 10,
  starts_at: '2015-08-25T09:00:00.000Z'
  })

TaskInstance.create({
  task_model_id: 10,
  starts_at: '2015-08-27T09:00:00.000Z'
  })

TaskModel.create({
  description: "Attend Jeremy Shaki's Bar Mitzvah--ZING!"
  })

TaskInstance.create({
  task_model_id:11
  })

TaskModel.create({
  description: 'Laundry Day'
  })

TaskInstance.create({
  task_model_id:12,
  starts_at: '2015-08-27T09:00:00.000Z',
  completed_at: '2015-08-27T09:00:00.000Z'

  })

TaskModel.create({
  description: 'Weekly cleaning'
  })

TaskInstance.create({
  task_model_id:13,
  starts_at: '2015-08-27T09:00:00.000Z',
  completed_at: '2015-08-27T09:00:00.000Z'
  })

TaskModel.create({
  description: 'Call Mama',
  })

TaskInstance.create({
  task_model_id:14
  })

TaskModel.create({
  description: 'Plan Euro 2016 trip'
  })

TaskInstance.create({
  task_model_id:15,
  starts_at: '2015-08-21T18:00:00.000Z',
  })

TaskModel.create({
  description: 'Hike the Chief'
  })

TaskInstance.create({
  task_model_id:16,
  starts_at: '2015-08-21T18:00:00.000Z'
  })
