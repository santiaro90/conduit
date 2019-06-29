module V1
  class ArticlesController < ApplicationController
    def index
      articles = Article.all

      render json: articles, status: :ok
    end
  end
end
