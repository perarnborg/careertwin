class ApiController
	def initialize(current_user)
	    @current_user = current_user
	end

	def current_user
		@current_user
    end

	def get_profile(linkedin_id)
		LinkedinApi::get_profile @current_user[:access_token], linkedin_id
    end

    def search
    	params = {
    		:"company-name" => "Freelance"
    	}
    	LinkedinApi::search @current_user[:access_token], params
    end
end
