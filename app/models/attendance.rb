class Attendance < ApplicationRecord
    belongs_to :user

    def is_open?
        self.end.nil?
    end

    # def can_modify_attendance? user_id
    # end

end
