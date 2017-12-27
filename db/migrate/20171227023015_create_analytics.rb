class CreateAnalytics < ActiveRecord::Migration[5.1]
  def change
    create_table :analytics do |t|
      t.string :query
      t.string :ip_address

      t.timestamps
    end
  end
end
