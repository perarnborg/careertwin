module LinkedinApi
  def self.get_user_by_token(token)
    url = "https://api.linkedin.com/v1/people/~"
  	http = Curl.get(url) do|http|
      http.headers['Authorization'] = "Bearer " + token
      http.headers['x-li-format'] = "json"
    end
    JSON.parse(http.body_str)
  end

  def self.get_profile(token, linkedin_id)
    url = "https://api.linkedin.com/v1/people/" + linkedin_id + ":(id,first-name,last-name,headline,location,positions,industry,num-connections,picture-url,site-standard-profile-request)"
    http = Curl.get(url) do|http|
    http.headers['Authorization'] = "Bearer " + token
      http.headers['x-li-format'] = "json"
    end
    JSON.parse(http.body_str)
  end

  def self.search(token, params)

    url = "https://api.linkedin.com/v1/people-search?sort=connections"
    params.each do |key, value|
      url += "&" + key.to_s + "=" + value.to_s
    end
#      url += ":(id,first-name,last-name,headline,location,positions,industry,num-connections,picture-url,site-standard-profile-request)"
    http = Curl.get(url) do|http|
      http.headers['Authorization'] = "Bearer " + token
      http.headers['x-li-format'] = "json"
    end
    JSON.parse(http.body_str)
  end
end
