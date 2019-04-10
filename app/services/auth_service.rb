class AuthService
  class << self
    def authenticate_user(email, password)
      user = User.find_by_email(email)

      if user.authenticate(password)
        secret = Rails.application.credentials.secret_key_base
        payload = { userId: user.id }


        JWT.encode(payload, secret, 'HS256')
      end
    end

    def decode(token)
      secret = Rails.application.credentials.secret_key_base
      payload, _ = *JWT.decode(token, secret, 'HS256')

      {
        payload: payload.with_indifferent_access
      }
    end
  end
end
