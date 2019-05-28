module Conduit::Test
  module SharedExamples
    RSpec.shared_examples_for 'a failing POST' do |code:, msg:|
      before :each do
        post path, params: params
      end

      context msg do
        it "responds with an HTTP #{code} error" do
          expect(response).to have_http_status(code)
        end

        it 'includes an error in the response' do
          expect(json_response[:error]).not_to be_empty
        end
      end
    end
  end
end

