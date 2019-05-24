module V1::ErrorHandler
  extend ActiveSupport::Concern
  include Conduit::Errors

  included do
    rescue_from ActiveRecord::RecordInvalid do |e|
      respond_error(e, :unprocessable_entity)
    end

    rescue_from NotFound do |e|
      respond_error(e, :not_found)
    end

    rescue_from Unauthorized do |e|
      respond_error(e, :unauthorized)
    end
  end

  private

  def respond_error(e, status)
    render json: { error: e.message }, status: status
  end
end
