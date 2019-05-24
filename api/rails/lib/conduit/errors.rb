module Conduit
  module Errors
    class NotFound < StandardError
      def message
        'Invalid Credentials'
      end
    end

    class Unauthorized < StandardError
      def message
        'Invalid Credentials'
      end
    end

    class InvalidParams < StandardError
      def initialize(message)
        super
      end
    end
  end
end
