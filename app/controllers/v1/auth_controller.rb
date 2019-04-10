module V1
  class AuthController < ApplicationController
    def login
      token, payload = *AuthService.authenticate_user(user_params[:email],
                                                      user_params[:password])

      cookies[:access_token] = { httponly: true, value: token }

      render json: payload, status: :ok
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
