require 'rails_helper'

describe V1::UsersController, type: :request do
  describe 'POST /users' do
    let (:bad_email) { FactoryBot.attributes_for(:user, email: '@bademail') }

    context 'with complete information' do
      it "fails if the email isn't well formatted" do
        post v1_users_path, params: { user: bad_email }, as: :json

        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(payload['error']).not_to be_empty
      end
    end
  end
end
