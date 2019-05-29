module V1
  class UsersController < ApplicationController
    def create
      user = User.create!(user_params)

      render json: user, status: :created
    end

    private

    def user_params
      permitted_keys = [:username, :email, :password]

      params.require(:user).permit(permitted_keys).tap do |user|
        user.require(:email)
        user.require(:password)
        user.require(:username)
      end
    end
  end
end
