class Api::AttendancesController < ApplicationController
	before_action :authenticate_user, only: [:create, :update, :list]
	before_action :set_employee, only: [:update, :create, :list]
	before_action :set_attendance, only: [:show, :update, :destroy, :create]
	before_action :check_if_open, only: [:create]
    
    # GET /attendances
    def index
      @attendances = Attendance.all
      render json: @attendances
    end

    # GET /attendances/1
    def show
      render json: @attendance
    end

	# GET /employees/2/attendances
	def list
		if (current_user.is_admin? && @user.admin_id == current_user.id) || (!current_user.is_admin?)
			attendances = @user.attendances
			render json: attendances 
		else
			render json: {errors: 'unauthorized'}, status: 401
		end
	end

    # POST /attendances
	def create
		@attendance = @user.attendances.new({start: Time.now})
		if @attendance.save
			render json: @attendance, status: :created
		else
			render json: @attendance.errors, status: :unprocessable_entity
		end
    end
   
	# PATCH/PUT /attendances/1
	def update
		if @attendance.is_open? && @attendance.update(end: Time.now)
			render json: @attendance
		else
			render json: @attendance.errors, status: :unprocessable_entity
		end
    end

    private
		# Use callbacks to share common setup or constraints between actions.
		def set_attendance
			@attendance = @user.attendances.last
		end

		def set_employee
			@user = User.find(params[:id])
		end

		def check_if_open
			if @attendance && @attendance.is_open?
				render json: {errors: "Close attendance first"}
			end
		end
		
		# Only allow a trusted parameter "white list" through.
		def attendance_params
			params.require(:attendance).permit(:user_id, :start, :end)
		end
end
