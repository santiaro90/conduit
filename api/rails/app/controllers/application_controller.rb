class ApplicationController < ActionController::API
  include ActionController::Cookies
  include Conduit::Errors

  rescue_from InvalidParams, with: :response_unprocessable
  rescue_from NotFound, with: :respond_not_found
  rescue_from Unauthorized, with: :respond_unauthorized

  private

  def respond_not_found(e)
    render json: { error: e.message }, status: :not_found
  end

  def respond_unauthorized(e)
    render json: { error: e.message }, status: :unauthorized
  end

  def response_unprocessable(e)
    render json: { error: e.message }, status: :unprocessable_entity
  end
end
