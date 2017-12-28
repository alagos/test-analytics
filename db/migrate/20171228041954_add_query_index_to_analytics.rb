class AddQueryIndexToAnalytics < ActiveRecord::Migration[5.1]
  def change
    add_index :analytics, :query
  end
end
