require 'rails_helper'

describe AuthService do
  describe '.authenticate' do
    let(:user) { FactoryBot.create(:registered_user) }
    let(:anonymous) { FactoryBot.build(:user, email: 'anon@example.com') }
    let(:service) { AuthService.new(email: user.email, password: user.password) }

    it 'initialises with an empty token' do
      expect(service.token).to be_nil
    end

    it 'initialises with an empty profile' do
      expect(service.profile).to be_nil
    end

    context 'when the credentials are correct' do
      it 'generates a token' do
        token = service.authenticate!

        expect(service.token).not_to be_empty
        expect(token).to eq(service.token)
      end

      it 'gets the profile' do
        profile = { bio: user.bio, email: user.email, username: user.username }

        service.authenticate!
        expect(service.profile).to include(profile)
      end

      it "includes the profile in the token's payload" do
        token = service.authenticate!
        profile = service.decode(token)[:user]

        expect(profile).to eq(service.profile)
      end
    end

    context 'when the credentials are wrong' do
      it "fails if the user doesn't exist" do
        expect do
          failing_service = AuthService.new(email: anonymous.email, password: anonymous.password)
          failing_service.authenticate!
        end.to raise_error(Conduit::Errors::NotFound)
      end

      it 'fails with a bad password' do
        expect do
          failing_service = AuthService.new(email: user.email, password: 'badpass')
          failing_service.authenticate!
        end.to raise_error(Conduit::Errors::Unauthorized)
      end
    end
  end
end
