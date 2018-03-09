class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :default_vars

  protected

  def default_vars
    gon.bing_api_key ||= ENV['BING_API_KEY']
  end
end
