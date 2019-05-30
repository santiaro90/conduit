require 'simplecov'

SimpleCov.start 'rails' do
  add_filter '/spec/'
end

if ENV['CI'] == 'true'
  require 'codecov'

  SimpleCov.formatter = SimpleCov::Formatter::Codecov
end
