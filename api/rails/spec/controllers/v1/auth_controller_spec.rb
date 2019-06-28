require 'rails_helper'

describe V1::AuthController, type: :request do
  describe 'POST /login' do
    let(:anonymous) { FactoryBot.build(:user, email: 'anon@example.com') }
    let(:user) { FactoryBot.create(:registered_user) }
    let(:path) { v1_login_path }

    context 'with valid credentials' do
      before :each do
        credentials = { email: user.email, password: 'password' }

        post path, params: { user: credentials }, as: :json
      end

      it 'responds successfully' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns an access token' do
        expect(json_response[:accessToken]).not_to be_empty
      end

      it "returns the user's profile" do
        profile = {
          bio: user.bio,
          email: user.email,
          username: user.username
        }

        expect(json_response[:user]).to include(profile)
      end
    end

    context 'with invalid credentials' do
      it_behaves_like 'a failing POST', code: :not_found, msg: "when the user doesn't exist" do
        let(:params) do
          credentials = { email: anonymous.email, password: 'password' }

          { user: credentials }
        end
      end

      it_behaves_like 'a failing POST', code: :unauthorized, msg: "when credentials don't match" do
        let(:params) do
          credentials = { email: user.email, password: 'badpass' }

          { user: credentials }
        end
      end
    end
  end
end
