require 'simplecov'
require 'simplecov-lcov'

SimpleCov.formatter = SimpleCov::Formatter::LcovFormatter

SimpleCov.start 'rails' do
  add_filter '/spec/'
end
