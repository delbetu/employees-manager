class Entry < ApplicationRecord
  belongs_to :employee

  # returns number of hours between time in and time out
  def total_time
    return 0 unless time_out
    (time_out - time_in)/60/60
  end
end
