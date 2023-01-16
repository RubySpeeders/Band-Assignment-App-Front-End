springboot-oauth-bearer: SpringBoot OAuth2 Resource Server with Keycloak as Provider
======================================================================================

Find detailed info on medium https://ravthiru.medium.com/springboot-oauth2-with-keycloak-for-bearer-client-3a31f608a78

What is it?
-----------

The `springboot-oauth-bearer` demonstrates how to configure Springboot OAUth2 Resource Server
to use Keycloak as Provider. We write a Springboot application providing API which is protected 
with Keycloak. Only Requests with valid tokens can request API.  

System Requirements
-------------------

All you need to build this project is 

* Java 11 (Java SDK 1.11) or later 
*  Gradle
*  Keycloak Server version 16+

Build and Run the springboot-oauth-bearer
--------------------------------------------

1. Open a terminal and navigate to the root directory of this springboot-Keycloak.

2. Build application
   ```
    gradle build
    ```
2. Build and Start springboot-keycloak application using below command

   ````
   gradle bootRun

   ````

Setup Keycloak
-----------------
1. Download keycloak 
2. Unzip folder and move to a desired location
3. Add keyclock to PATH variable in ~/.zshrc:
   ``` export PATH="$HOME/.jenv/bin:$PATH:/Users/<username>/Library/Caches/Homebrew/downloads/keycloak-20.0.3/bin"```
4. Start the keycloak server on port 8080 by executing the command in your terminal:
   ```kc.sh start-dev```
5. Navigate to http://localhost:8080 in terminal
6. ... tbc

Test application
-----------------

## To Get the Token

`curl  POST 'http://localhost:8080/realms/springboot/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=demoapp' \
--data-urlencode 'username=testuser' \
--data-urlencode 'password=test123' \
--data-urlencode 'grant_type=password' `

## To Request The API

`curl 'http://localhost:8081/user' --header 'Authorization: Bearer <Token>' `
