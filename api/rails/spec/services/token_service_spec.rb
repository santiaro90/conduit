require 'rails_helper'

describe TokenService do
  let(:token) { TokenService.generate(ok: true, error: nil) }
  let(:payload) {
    JWT.decode(token, TokenService::SECRET, TokenService::ALG).first
  }

  describe '.generate' do
    it 'generates a JWT token with given data' do
      expect(payload['ok']).to be(true)
      expect(payload['error']).to be_nil
    end

    it 'expires tokens after 1 week' do
      expect(payload['exp']).to be(1.week.from_now.to_i)
    end
  end

  describe '.decode' do
    it "returns the token's payload" do
      expect(TokenService.decode(token)).to eq(payload)
    end
  end
end
