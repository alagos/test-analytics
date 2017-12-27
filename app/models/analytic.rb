class Analytic < ApplicationRecord
  validates_presence_of :query, :ip_address
  before_create :strip_query

  def strip_query
    query.strip!
  end
end
