module AuthService
  class << self
    include Conduit::Errors

    def authenticate(params)
      invalid_msg = 'Invalid credentials'
      user = User.find_by_email(params[:email])

      raise NotFound, invalid_msg unless user
      raise Unauthorized, invalid_msg unless user.authenticate(params[:password])

      profile = user.slice(:bio, :email, :username)
      TokenService.generate({ user: profile })
    end
  end
end
