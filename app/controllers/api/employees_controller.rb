class Api::EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy, :attendances]
  before_action :authenticate_admin, only: [:create, :index, :attendances]
  before_action :authenticate_employee, only: [:attendances]
  include Api::Concerns::Auth

  # GET /employees
  def index
    @employees = current_admin.employees
    render json: @employees
  end

  # GET /employees/1
  def show
    render json: @employee
  end

  # GET /employees/1/attendances
  def attendances
    render json: @employee.attendances
  end

  # POST /employees
  def create
    @employee = current_admin.employees.new(employee_params)
    print @employee
    if @employee.save
      employee = {
        id: @employee.id,
        first_name: @employee.first_name,
        last_name: @employee.last_name,
        email: @employee.email,
        password: @employee.password
      }
      render json: employee, status: :created
    else
      print @employee.errors
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # /employees/current
  def current
    token = {token: auth_token(current_employee).token}
    user = {
      id: current_employee.id,
      role: 'employee',
      email: current_employee.email,
      first_name: current_employee.first_name,
      last_name: current_employee.last_name,
    }
    render json: user.merge(token)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def employee_params
      params.require(:employee).permit(:email, :password_digest, :first_name, :last_name, :password, :password_confirmation)
    end
end
