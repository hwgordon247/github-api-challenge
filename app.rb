ENV['RACK_ENV'] ||= 'development'
require 'sinatra/base'

class GitHubAPI < Sinatra::Base
  set :sessions, true

  get '/' do

  end

  run! if app_file == $0
end
