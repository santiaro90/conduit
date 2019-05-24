require 'rails_helper'

describe V1::AuthController, type: :request do
  describe 'POST /login' do
    let(:user) { FactoryBot.create(:registered_user) }
    let(:anonymous) { FactoryBot.build(:user, email: 'anon@example.com') }

    context 'with valid credentials' do
      before :each do
        credentials = { email: user.email, password: 'password' }
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

    context 'with invalid credentials' do
      it "fails when the user doesn't exist" do
        credentials = { email: anonymous.email, password: 'password' }
        post v1_login_path, params: { user: credentials }, as: :json

        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:not_found)
        expect(payload['error']).not_to be_empty
      end

      it "fails when credentials don't match" do
        bad_pass_credentials = { email: user.email, password: 'badpass' }
        post v1_login_path, params: { user: bad_pass_credentials }, as: :json

        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:unauthorized)
        expect(payload['error']).not_to be_empty
      end
    end
  end
end
