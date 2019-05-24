class ApplicationController < ActionController::API
  include ActionController::Cookies
  include V1::ErrorHandler
end
