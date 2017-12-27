class AnalyticsController < ApplicationController
  def index
    @analytics = Analytic.sorted_by_query
  end

  def create
    Analytic.create!(analytic_params.merge(ip_address: request.remote_ip))
    head :created
  end

  def analytic_params
    params.require(:analytic).permit(:query)
  end
end
