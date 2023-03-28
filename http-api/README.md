# HTTP API

Here are several endpoints

GET / - it's public endpoint <br />
GET /simple - authorization required <br />
GET /admin - needs authorization but there is an important point it's scope and admin group for user is required <br />
GET /both - authorization required but needs admin or super users group <br />
GET /su - only super users group (scope) can access <br />

# Important

for accessing endpoints there are used "Audiences" you have to use id_token
