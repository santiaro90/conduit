require 'rails_helper'

describe AuthService do
  describe '.authenticate' do
    let(:user) { FactoryBot.create(:registered_user) }
    let(:profile) { user.slice(:bio, :email, :username) }

    context 'when the credentials are correct' do
      let(:params) { { email: user.email, password: user.password } }

      it 'returns a token for the user' do
        expect(AuthService.authenticate(params)).not_to be_empty
      end

      it "includes the user's profile in the token" do
        token = AuthService.authenticate(params)
        payload = TokenService.decode(token)

        expect(payload['user']).to include(profile)
      end
    end

    context 'when the credentials are wrong' do
      it "fails if the user doesn't exist" do
        expect {
          AuthService.authenticate(email: 'any@example.com', password: user.password)
        }.to raise_error(Conduit::Errors::NotFound)
      end

      it 'fails with a bad password' do
        expect {
          AuthService.authenticate(email: user.email, password: 'badpass')
        }.to raise_error(Conduit::Errors::Unauthorized)
      end
    end
  end
end
