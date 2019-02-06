class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
	before_action :authenticate_user, only: [:show, :update, :current, :create_employee, :employees]
	before_action :authorize_as_admin, only: [:create_employee, :employees]
	include Api::Concerns::Auth
  
	def current
      	token = auth_token(current_user).token
		render json: {user: current_user, token: token}, :except =>  [:password_digest]
    end
  
    # POST /users
    def create
      	@user = User.new(user_params.merge(role: 'admin'))
		if @user.save
			token = auth_token(@user).token
			render json: {user: @user, token: token}, :except =>  [:password_digest], status: 200
		else
			render json: @user.errors, status: 400
		end
	end
	
	# Post /employees
	def create_employee
		@user = User.new(user_params.merge(role: 'employee', admin_id: current_user.id))
		if @user.save
			render json: {user: @user}, :except =>  [:password_digest], status: 200
		else
			render json: @user.errors, status: 400
		end
	end
	
	# Get /employees
	def employees
		@employees = current_user.employees
		render json: @employees
	end
  
    private
		# Use callbacks to share common setup or constraints between actions.
		def set_user
			@user = User.find(params[:id])
		end
	
		# Only allow a trusted parameter "white list" through.
		def user_params
			params.require(:user).permit(:email, :password_digest, :company, :first_name, :last_name, :password, :password_confirmation)
		end
		  
    end
  