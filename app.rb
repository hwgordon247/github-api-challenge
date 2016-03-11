ENV['RACK_ENV'] ||= 'development'
require 'sinatra/base'
require 'rest_client'
require 'json'

class GitHubAPI < Sinatra::Base
  set :sessions, true

  get '/' do

    # user = RestClient.get 'https://api.github.com/users/hwgordon247?access_token=3a8128552359d69803a6ae6df6bbeed9338e251d'
    send_file File.join(settings.public_folder, 'index.html')
    # info = JSON.parse(user)
    # p info

  end

  run! if app_file == $0
end
