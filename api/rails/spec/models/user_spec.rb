require 'rails_helper'

describe User, type: :model do
  it { is_expected.to have_secure_password }

  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:username) }

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
  it { is_expected.to validate_uniqueness_of(:username).case_insensitive }
end
