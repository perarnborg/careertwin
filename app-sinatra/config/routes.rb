before do
  @Params = params
  @Request = request
end

get "/" do
	haml :index
end

namespace '/api' do
	before do
		if env['warden'] and env['warden'].user
			env['warden'].authenticate!
			@api = ApiController.new env['warden'].user
		else
			return false
		end
	end

	get "/current-user" do
		@api.current_user.to_json if @api
	end

    get "/find-twins" do
    	[].to_json
    end
end

namespace '/oauth' do
	oauth = OauthController.new

	get "/signin" do
		url = oauth.authorization_code_url
		redirect url if url
	end

	get "/callback" do
		access_token = oauth.access_token @Params
		if access_token
			redirect '/oauth/authenticate?access_token=' + access_token
		else
			redirect '/oauth/failed'
		end
	end

	get "/failed" do
		'Authentication failed'
	end

	get "/authenticate" do
		env['warden'].authenticate!
		redirect '/#/find-twins'
	end

	get "/signout" do
		env['warden'].raw_session.inspect
		env['warden'].logout
		redirect '/'
	end
end

