module V1
  include Conduit::Errors

  class UsersController < ApplicationController
    def create
      user = User.create(params['user'])
    rescue ActiveModel::ForbiddenAttributesError
      raise InvalidParams, 'Bad Params' unless user
    end
  end
end
