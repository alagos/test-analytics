class SearchController < ApplicationController
  def index
    gon.count_queries = Analytic.count_grouped_queries.to_a.first.count
  end
end
