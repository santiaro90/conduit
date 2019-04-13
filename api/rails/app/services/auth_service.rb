module AuthService
  INVALID_CREDENTIALS_MESSAGE = 'Invalid credentials'

  class << self
    def authenticate_user(email, password)
      user = User.find_by_email(email)

      raise UserNotFound unless user
      raise InvalidCredentials unless user.authenticate(password)

      secret = Rails.application.credentials.secret_key_base
      payload = {
        user: user.slice(:bio, :email, :username)
      }

      [JWT.encode(payload, secret, 'HS256'), payload]
    end

    def decode(token)
      secret = Rails.application.credentials.secret_key_base
      payload, _ = *JWT.decode(token, secret, 'HS256')

      {
        payload: payload.with_indifferent_access
      }
    end
  end

  class UserNotFound < StandardError;
    def message
      INVALID_CREDENTIALS_MESSAGE
    end
  end

  class InvalidCredentials < StandardError
    def message
      INVALID_CREDENTIALS_MESSAGE
    end
  end
end
