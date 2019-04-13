require 'rails_helper'

describe V1::AuthController, type: :request do
  context 'POST /login' do
    let(:user) { FactoryBot.create(:user) }

    before :each do
      credentials = { email: user.email, password: 'password'}
      post v1_login_path, params: { user: credentials }, as: :json
    end

    it 'responds successfully' do
      expect(response).to have_http_status(:ok)
    end

    it 'sets a cookie with an access token' do
      expect(cookies[:access_token]).not_to be_empty
    end

    it "returns the user's profile" do
      payload = JSON.parse(response.body)
      profile = {
        'bio' => user.bio,
        'email' => user.email,
        'username' => user.username
      }

      expect(payload['user']).to include(profile)
    end
  end
end
