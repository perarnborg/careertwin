class User < ActiveRecord::Base

	def from_linkedin!(access_token, expires_in, linkedin_user)
		self.linkedin_id = linkedin_user['id']
		self.access_token = access_token
		self.access_token_expires = DateTime.now + expires_in.seconds
		self.first_name = linkedin_user['firstName']
		self.last_name = linkedin_user['lastName']
		self.url = linkedin_user['siteStandardProfileRequest']['url'] if linkedin_user['siteStandardProfileRequest']
		return self
	end
end
