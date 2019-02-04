class Api::AdminsController < ApplicationController
  before_action :set_admin, only: [:show, :update, :destroy]
  before_action :authenticate_admin, only: [:show, :update, :destroy, :current, :index, :update]

  def current
    token = {token: auth_token(current_admin).token}
    user = current_admin.as_json(only: %i(first_name last_name email company)).merge(token)
    render json: {user: user}
  end
  
  # GET /admins
  def index
    @admins = Admin.all

    render json: @admins
  end

  # GET /admins/1
  def show
    render json: @admin
  end

  # POST /admins
  def create
    @admin = Admin.new(admin_params)

    if @admin.save
      user = {
        email: @admin.email,
        first_name: @admin.first_name,
        last_name: @admin.last_name,
        company: @admin.company,
        token: auth_token(@admin).token
      }
      render json: {user: user, status: :created}, status: 200
    else
      render json: @admin.errors, status: 400
    end
  end

  # PATCH/PUT /admins/1
  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    @admin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    
    def auth_token(user)
      Knock::AuthToken.new payload: {sub: user.id}
    end

    # Only allow a trusted parameter "white list" through.
    def admin_params
      params.require(:admin).permit(:email, :password_digest, :company, :first_name, :last_name, :password, :password_confirmation)
    end

  end
