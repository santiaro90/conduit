module Conduit::Test
  module Helpers
    def json_response
      JSON.parse(response.body).with_indifferent_access
    end
  end
end
