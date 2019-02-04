class Employee < ApplicationRecord
    has_secure_password
    belongs_to :admin, class_name: 'Admin'
    has_many :attendances
    
    validates :email, :password, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 8 }
    
end
