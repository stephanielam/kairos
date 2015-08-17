class Task < ActiveRecord::Base
  has_many :completions
end
