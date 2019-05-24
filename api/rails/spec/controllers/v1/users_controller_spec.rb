require 'rails_helper'

describe V1::UsersController, type: :request do
  describe 'POST /users' do
    let (:info) { FactoryBot.attributes_for(:user) }

    context 'with complete information' do
      it "fails if the email isn't well formatted" do
        info['email'] = '@bademail'
        post v1_users_path, params: { user: info }, as: :json

        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(payload['error']).not_to be_empty
      end
    end
  end
end
