FactoryBot.define do
  factory :user do
    bio { 'My bio' }
    password { 'password' }
    sequence(:email) { |n| "email#{n}@example.com" }
    username { 'user' }
  end
end
