class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.integer :employee_id
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
