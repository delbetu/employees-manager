class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.references :employee, null: false, foreign_key: true
      t.date :date
      t.time :time_in
      t.time :time_out

      t.timestamps
    end
  end
end
