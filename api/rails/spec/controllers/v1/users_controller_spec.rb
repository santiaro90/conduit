require 'rails_helper'

describe V1::UsersController, type: :request do
  describe 'POST /users' do
    context 'with complete information' do
      it "fails if the email isn't well formatted" do
        bad_email = FactoryBot.attributes_for(:user, email: '@bademail')

        post v1_users_path, params: { user: bad_email }
        payload = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(payload['error']).not_to be_empty
      end

      it 'creates a user' do
        info = FactoryBot.attributes_for(:user)

        post v1_users_path, params: { user: info }

        payload = JSON.parse(response.body)
        user = payload['user'].with_indifferent_access
        record = User.find_by_email(user[:email])

        expect(response).to have_http_status(:created)

        expect(record).to be_present
        expect(user[:bio]).to be_nil
        expect(user[:username]).to eq(user[:username])
      end
    end

    context 'with incomplete information' do
      shared_examples_for 'a request with missing params' do |missing_param|
        it "fails when missing #{missing_param}" do
          post v1_users_path, params: params

          payload = JSON.parse(response.body)

          expect(response).to have_http_status(:bad_request)
          expect(payload['error']).not_to be_empty
        end
      end

      it_behaves_like 'a request with missing params', 'user' do
        let(:params) { {} }
      end

      it_behaves_like 'a request with missing params', 'email' do
        let(:params) { FactoryBot.attributes_for(:user, email: nil) }
      end

      it_behaves_like 'a request with missing params', 'password' do
        let(:params) { FactoryBot.attributes_for(:user, password: nil) }
      end

      it_behaves_like 'a request with missing params', 'username' do
        let(:params) { FactoryBot.attributes_for(:user, username: nil) }
      end
    end
  end
end