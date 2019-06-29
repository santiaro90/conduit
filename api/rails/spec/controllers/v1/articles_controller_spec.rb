require 'rails_helper'

describe V1::ArticlesController, type: :request do
  describe 'GET /articles' do
    it 'returns a list of articles' do
      user = FactoryBot.create(:user)
      FactoryBot.create_list(:article, 10, user: user)

      get v1_articles_path
      expect(json_response[:articles].length).to be(10)
    end
  end
end
