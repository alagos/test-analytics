class Analytic < ApplicationRecord
  validates_presence_of :query, :ip_address
  before_create :strip_query

  def strip_query
    query.strip!
  end

  def self.sorted_by_query
    group_by_query.select('COUNT(*)').order('COUNT(*) DESC')
  end

  def self.count_grouped_queries
    select('COUNT(*)').from(group_by_query)
  end

  def self.group_by_query
    group(:query).select(:query)
  end
end
