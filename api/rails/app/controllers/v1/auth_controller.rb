module V1
  class AuthController < ApplicationController
    def login
      auth_service = AuthService.new(email: user_params[:email],
                                     password: user_params[:password])

      token = auth_service.authenticate!
      profile = { user: auth_service.profile }
      cookies[:access_token] = { httponly: true, value: token }

      render json: profile, status: :ok
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
