class ArticleSerializer < ActiveModel::Serializer
  attributes :title, :description, :body, :created_at, :updated_at
  belongs_to :user, key: :author
end
