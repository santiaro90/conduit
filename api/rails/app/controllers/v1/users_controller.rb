module V1
  include Conduit::Errors

  class UsersController < ApplicationController
    def create
      User.create!(user_params)
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
