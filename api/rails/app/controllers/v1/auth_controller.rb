module V1
  class AuthController < ApplicationController
    def login
      token = AuthService.authenticate(user_params)
      payload = TokenService.decode(token)

      render json: { accessToken: token, user: payload['user'] }, status: :ok
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
