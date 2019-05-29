class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :email, :username
end
