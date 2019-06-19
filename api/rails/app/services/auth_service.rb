class AuthService
  include Conduit::Errors

  attr_reader :email, :password, :profile, :token

  SECRET = Rails.application.credentials.secret_key_base

  def initialize(email:, password:)
    @email = email
    @password = password
  end

  def authenticate!
    invalid_msg = 'Invalid credentials'
    user = User.find_by_email(email)

    raise NotFound, invalid_msg unless user
    raise Unauthorized, invalid_msg unless user.authenticate(password)

    @profile = user.slice(:bio, :email, :username)
    @token = JWT.encode({ user: profile }, SECRET, 'HS256')
  end

  def decode(token)
    payload, _ = *JWT.decode(token, SECRET, 'HS256')
    payload.with_indifferent_access
  end
end
