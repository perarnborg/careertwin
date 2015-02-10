module LinkedinApi
  def self.get_user_by_token(token)
  	''
  	http = Curl.get("https://api.linkedin.com/v1/people/~") do|http|
      http.headers['Authorization'] = "Bearer " + token
      http.headers['x-li-format'] = "json"
    end
    JSON.parse(http.body_str)
  end
end
