class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]

  # GET /employees
  # GET /employees.json
  def index
    @employees = Employee.all
  end

  # GET /employees/1
  # GET /employees/1.json
  def show
  end

  # POST /employees
  # POST /employees.json
  def create
    @employee = Employee.new(employee_params)

    @employee.save!
    render :show, status: :created
  rescue ActiveRecord::RecordNotUnique => e
    render json: { error_message: 'Email already taken.' }, status: :ok
  rescue => e
    Rails.logger.error("Error Creating Employee #{e.message}")
    render json: { error_message: 'Unexpected error occurs' }, status: :unprocessable_entity
  end

  # PATCH/PUT /employees/1
  # PATCH/PUT /employees/1.json
  def update
    if @employee.update(employee_params)
      render :show, status: :ok, location: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /employees/1
  # DELETE /employees/1.json
  def destroy
    @employee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.require(:employee).permit(:email, :name, :last_name, :gender)
    end
end
