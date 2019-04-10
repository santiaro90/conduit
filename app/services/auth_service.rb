class AuthService
  class << self
    def authenticate_user(email, password)
      user = User.find_by_email(email)

      if user.authenticate(password)
        payload = { userId: user.id }
        JWT.encode(payload, nil, 'none')
      end
    end

    def decode(token)
      payload, _ = *JWT.decode(token, nil, false)

      {
        payload: payload.with_indifferent_access
      }
    end
  end
end
