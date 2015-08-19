TaskModel.create({          #1
  description: 'scheduled, recurring, not braindump',
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
  description: 'scheduled, not braindump'
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
  description: 'this is the only thing that should show up in braindump'
  })

TaskInstance.create({
  task_model_id: 4
  })

TaskModel.create({          #5
  description: 'sceduled for today, not recurring'
  })

TaskInstance.create({
  task_model_id: 5,
  starts_at: '2015-08-19T09:00:00.000Z'
  })

TaskModel.create({          #6
  description: 'sceduled for tomorrow, not recurring'
  })

TaskInstance.create({
  task_model_id: 6,
  starts_at: '2015-08-20T09:00:00.000Z'
  })

TaskModel.create({          #7
  description: 'sceduled for day after tomorrow, not recurring'
  })

TaskInstance.create({
  task_model_id: 7,
  starts_at: '2015-08-21T09:00:00.000Z'
  })

TaskModel.create({          #8
description: 'sceduled for day after, DAY AFTER!!!! OKAY?!?!?!, not recurring'
  })

TaskInstance.create({
  task_model_id: 8,
  starts_at: '2015-08-22T09:00:00.000Z'
  })

TaskModel.create({          #9
  description: 'recurring, nothing scheduled or completed yet, not braindump',
  repeat_times: 2,
  })

TaskInstance.create({
  task_model_id: 9
  })
