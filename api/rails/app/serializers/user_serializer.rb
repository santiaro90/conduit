class UserSerializer < ActiveModel::Serializer
  type :user

  attributes :bio, :email, :username
end
