require "rails_helper"

RSpec.describe Api::UsersController, type: :routing do
  describe "routing" do

    it "routes to #create" do
      expect(:post => "/api/users").to route_to("api/users#create")
    end
    
  end
end
