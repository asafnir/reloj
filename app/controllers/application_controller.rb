class ApplicationController < ActionController::API
    include Knock::Authenticable

    def fallback_index_html
        render :file => 'public/index.html'
    end
    
    protected
    # Method for checking of the current_user is admin or not
    def authorize_as_admin
        return_unauthorized unless !current_user.nil? && current_user.is_admin?
    end

    def authorize_to_modify_attendance
        
    end
end
