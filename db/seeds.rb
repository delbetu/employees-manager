employee = Employee.create(name: 'Marcos', last_name: 'Bellucci', email: 'delbetu@gmail.com', gender: 'male')

Entry.create(
  employee: employee,
  date: Date.parse('3rd Mar 2020'),
  time_in: Time.utc(2000, "jan", 1, 8, 15, 0),
  time_out: Time.utc(2000, "jan", 1, 18, 15, 0)
)
