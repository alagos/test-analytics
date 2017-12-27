class Analytic < ApplicationRecord
  validates_presence_of :query, :ip_address
  before_create :strip_query

  def strip_query
    query.strip!
  end

  def self.sorted_by_query
    group(:query).select(:query).select('COUNT(*)').order('COUNT(*) DESC')
  end
end
