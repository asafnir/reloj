module Api::Concerns::Auth
    extend ActiveSupport::Concern
    
    def auth_token user
        Knock::AuthToken.new payload: {sub: user.id}
    end

    def send_auth_token_for_valid_login_of(user)
        render json: { user: user }, :except =>  [:password_digest, :token_created_at, :reset_password_token, :reset_password_sent_at]
    end
end
