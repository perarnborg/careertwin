# CAREER TWIN

Angular frontend and Sinatra RESTful backend.

SETUP
=====

Sinatra running on ruby 2.1.3

Setup application with:

```
bundle install
npm install
```

Compile assets with:

```
gulp
```
NOTE: this is done after npm install.

Watch assets with:

```
gulp watch
```

Run with:

```
bundle exec ruby application.rb
```

Or if you rather want hot deployment with shotgun (which reloads the app on every request):

```
bundle exec shotgun --server=thin application.rb
```
NOTE: bundle exec is needed to get the right Rack version.
