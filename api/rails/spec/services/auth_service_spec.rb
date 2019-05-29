require 'rails_helper'

describe AuthService do
  let(:user) { FactoryBot.create(:registered_user) }

  it 'generates a valid JWT for an existing user' do
    token, _ = AuthService.authenticate_user(user.email, user.password)
    expect(AuthService.decode(token)).not_to be_empty
  end

  it "includes the user's profile in the token's payload" do
    token, _ = AuthService.authenticate_user(user.email, user.password)
    payload = AuthService.decode(token)[:payload][:user]

    expect(payload[:bio]).to eq(user.bio)
    expect(payload[:email]).to eq(user.email)
    expect(payload[:username]).to eq(user.username)
  end

  it "fails if the user doesn't exist" do
    expect {
      AuthService.authenticate_user('anon@example.com', 'password')
    }.to raise_error(Conduit::Errors::NotFound)
  end

  it 'fails with a bad password' do
    expect {
      AuthService.authenticate_user(user.email, 'badpass')
    }.to raise_error(Conduit::Errors::Unauthorized)
  end
end
