require 'rails_helper'

describe V1::UsersController, type: :request do
  describe 'POST /users' do
    let(:path) { v1_users_path }

    context 'with correct information' do
      let(:correct_info) { FactoryBot.attributes_for(:user) }

      before :each do
        post path, params: { user: correct_info }
      end

      it 'responds successfully' do
        expect(response).to have_http_status(:created)
      end

      it 'creates a user' do
        user = json_response[:user]
        record = User.find_by_email(user[:email])

        expect(record).to be_present
      end

      it "returns the new user's profile" do
        profile = {
          bio: nil,
          email: correct_info[:email],
          username: correct_info[:username]
        }

        expect(json_response[:user]).to include(profile)
      end
    end

    context 'with incorrect information' do
      it_behaves_like 'a failing POST', code: :bad_request, msg: 'when user is missing' do
        let(:params) do
          { user: nil }
        end
      end

      it_behaves_like 'a failing POST', code: :bad_request, msg: 'when email is missing' do
        let(:params) do
          { user: FactoryBot.attributes_for(:user, email: nil) }
        end
      end

      it_behaves_like 'a failing POST', code: :bad_request, msg: 'when password is missing' do
        let(:params) do
          { user: FactoryBot.attributes_for(:user, password: nil) }
        end
      end

      it_behaves_like 'a failing POST', code: :bad_request, msg: 'when username is missing' do
        let(:params) do
          { user: FactoryBot.attributes_for(:user, username: nil) }
        end
      end

      it_behaves_like 'a failing POST', code: :unprocessable_entity, msg: "when the email isn't correct" do
        let(:params) do
          { user: FactoryBot.attributes_for(:user, email: '@bademail') }
        end
      end
    end
  end
end
