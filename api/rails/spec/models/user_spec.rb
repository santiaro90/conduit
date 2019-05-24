require 'rails_helper'

describe User, type: :model do
  it { is_expected.to have_secure_password }

  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:username) }

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
  it { is_expected.to validate_uniqueness_of(:username).case_insensitive }

  it { is_expected.to allow_value('email@example.com').for(:email) }
  it { is_expected.not_to allow_value('email@').for(:email) }
  it { is_expected.not_to allow_value('example.com').for(:email) }
  it { is_expected.not_to allow_value('@example.com').for(:email) }
  it { is_expected.not_to allow_value('example').for(:email) }
end
