require 'rails_helper'

describe V1::AuthController, type: :request do
  context 'POST /login' do
    let(:user) { FactoryBot.create(:user) }

    before :each do
      params = { email: user.email, password: 'password'}
      post v1_login_path, params: params, as: :json
    end

    it 'responds successfully' do
      expect(response).to have_http_status(:success)
    end

    it 'sets a cookie with an access token' do
      payload = AuthService.decode(cookies[:access_token])[:payload]
      expect(payload[:userId]).to eq(user.id)
    end
  end
end
