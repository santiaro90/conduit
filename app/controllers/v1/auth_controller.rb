module V1
  class AuthController < ApplicationController
    def login
      token = AuthService.authenticate_user(user_params[:email],
                                            user_params[:password])

      cookies[:access_token] = { httponly: true, value: token }
      render :success
    end

    private

    def user_params
      params.permit(:email, :password)
    end
  end
end
