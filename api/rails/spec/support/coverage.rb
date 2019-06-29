require 'simplecov'
require 'simplecov-lcov'

SimpleCov::Formatter::LcovFormatter.config.report_with_single_file = true

SimpleCov.formatter = SimpleCov::Formatter::LcovFormatter

SimpleCov.start 'rails' do
  add_filter '/spec/'
end
