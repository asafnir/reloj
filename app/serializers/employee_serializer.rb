class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :role
  
  def role
    "employee"
  end
end
