class User < ApplicationRecord
    has_secure_password

    validates :first_name, :email, :password, presence: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 

    validates :password, length: { minimum: 8 }

    has_many :attendances
    
    def can_modify_user? user_id
        role == 'admin' || id.to_s == user_id.to_s
    end

    def employees
        User.where(admin_id: self.id)
    end

    def is_admin?
        role == 'admin'
    end
end
