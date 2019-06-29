FactoryBot.define do
  factory :article do
    body { 'Lorem ipsum dolor sit amet, eros eleifend eu sea, virtute' \
           ' ceteros evertitur no his. Wisi illud ullum id sea, mea.' }
    sequence(:title) { |n| "Article #{n}" }
    sequence(:description) { |n| "Description for Article #{n}" }
    user
  end
end
