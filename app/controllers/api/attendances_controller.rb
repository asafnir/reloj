class Api::AttendancesController < ApplicationController
  before_action :set_attendance, only: [:show, :update, :destroy]
  before_action :set_employee, only: [:create]
  before_action :authenticate_employee, :authenticate_admin
  
  # GET /attendances
  def index
    @attendances = Attendance.all
    render json: @attendances
  end

  # GET /attendances/1
  def show
    render json: @attendance
  end

  # POST /attendances
  def create
    @attendance = @employee.attendances.new({start: Time.now})

    if @attendance.save
      render json: @attendance, status: :created
    else
      render json: @attendance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /attendances/1
  def update
    if @attendance.update(end: Time.now)
      render json: @attendance
    else
      render json: @attendance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /attendances/1
  def destroy
    @attendance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attendance
      @attendance = Attendance.find(params[:id])
    end

    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    # def attendance_params
    #   params.require(:attendance).permit(:employee_id, :start, :end)
    # end
end
