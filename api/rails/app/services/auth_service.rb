module AuthService
  class << self
    include Conduit::Errors

    SECRET = Rails.application.credentials.secret_key_base

    def authenticate_user(email, password)
      invalid_msg = 'Invalid credentials'
      user = User.find_by_email(email)

      raise NotFound, invalid_msg unless user
      raise Unauthorized, invalid_msg unless user.authenticate(password)

      profile = user.slice(:bio, :email, :username)
      payload = { user: profile }

      [JWT.encode(payload, SECRET, 'HS256'), payload]
    end

    def decode(token)
      payload, _ = *JWT.decode(token, SECRET, 'HS256')

      { payload: payload.with_indifferent_access }
    end
  end
end
