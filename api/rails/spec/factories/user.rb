FactoryBot.define do
  factory :user do
    password { 'password' }
    sequence(:email) { |n| "email#{n}@example.com" }
    username { 'user' }

    factory :registered_user do
      bio { 'My bio' }
    end
  end
end
