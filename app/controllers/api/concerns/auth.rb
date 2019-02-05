module Api::Concerns::Auth
    extend ActiveSupport::Concern
    
    def auth_token user
        Knock::AuthToken.new payload: {sub: user.id}
    end
end
