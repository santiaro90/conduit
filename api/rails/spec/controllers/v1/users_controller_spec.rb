require 'rails_helper'

describe V1::UsersController, type: :request do
  describe 'POST /users' do
    context 'with complete information' do
      it "fails if the email isn't well formatted" do
        bad_email = FactoryBot.attributes_for(:user, email: '@bademail')

        post v1_users_path, params: { user: bad_email }, as: :json
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(payload['error']).not_to be_empty
      end
    end

    context 'with incomplete information' do
      it 'fails for empty params' do
        post v1_users_path
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:bad_request)
        expect(payload['error']).not_to be_empty
      end

      it 'fails for missing email' do
        user = FactoryBot.attributes_for(:user, email: nil)

        post v1_users_path, params: { user: user }
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:bad_request)
        expect(payload['error']).not_to be_empty
      end

      it 'fails for missing username' do
        user = FactoryBot.attributes_for(:user, username: nil)

        post v1_users_path, params: { user: user }
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:bad_request)
        expect(payload['error']).not_to be_empty
      end

      it 'fails for missing password' do
        user = FactoryBot.attributes_for(:user, password: nil)

        post v1_users_path, params: { user: user }
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:bad_request)
        expect(payload['error']).not_to be_empty
      end
    end
  end
end
