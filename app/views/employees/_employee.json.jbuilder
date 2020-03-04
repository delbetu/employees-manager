json.extract! employee, :id, :name, :last_name, :gender, :created_at, :updated_at
json.url employee_url(employee, format: :json)
