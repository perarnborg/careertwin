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
            status 403
            return false
        end
    end

    get "/current-user" do
        @api.current_user.to_json if @api
    end

    get "/current-profile" do
        @api.get_profile(@api.current_user.linkedin_id).to_json if @api
    end

    get "/search" do
        @api.search.to_json if @api
    end

    get "/find-twins" do
        ["Mr Myagi"].to_json
    end
end

namespace '/oauth' do
    oauth = OauthController.new

    get "/signin" do
        url = oauth.authorization_code_url @Request.host_with_port
        redirect url if url
    end

    get "/callback" do
        access_token = oauth.access_token @Request.host_with_port, @Params
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

