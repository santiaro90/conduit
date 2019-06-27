module TokenService
  ALG = 'HS256'
  SECRET = Rails.application.credentials.secret_key_base

  class << self
    def generate(payload)
      with_exp = payload.merge(exp: 1.week.from_now.to_i)
      JWT.encode(with_exp, SECRET, ALG)
    end

    def decode(token)
      JWT.decode(token, SECRET, ALG).first
    end
  end
end
