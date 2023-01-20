import React from 'react';
import { useAuth, User } from 'oidc-react';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// import { AxiosProvider, Get, axios } from 'react-axios'
import axios from 'axios'
import AxiosHeaders from 'axios'

// var axiosInstance = axios.create({
//   baseURL: 'http://localhost:8081/',
//   timeout: 2000,
//   headers: { 'Authorization': 'Bearer ' }
// });

// TODO: Double bind Auth Token at login to headers value!
const Home = () => {
  const auth = useAuth();
  console.log(auth);
  if (auth && auth.userData) {
    var token = auth.userData.access_token
    var authHeader = "'Authorization': 'Bearer " + auth.userData.access_token + "'"
    console.log(authHeader)
    const headers = {
      'Authorization': 'Bearer ' + auth.userData.access_token
  };
  console.log()
  axios.get('http://localhost:8081/user', { headers })
      .then(response => console.log(response.data));
    return (
      <div>
        <strong>Logged in! 🎉</strong><br />
        <button onClick={() => auth.signOut()}>Log out!</button>
        <div>
        {/* <AxiosProvider instance={ axiosInstance }>
          <Get url="user">
            {(error, response, isLoading, makeRequest) => {
              if(error) {
               return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
              }
              else if(isLoading) {
               return (<div>Loading...</div>)
             }
             else if(response !== null) {
               return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
              }
              return (<div>Default message before request is made.</div>)
           }}
          </Get>
        </AxiosProvider> */}
    </div>
      </div>
    );
  }
  // Add a login page here? Redirect to keycloak login page?
  return <div>Not logged in! Try to refresh to be redirected to Keycloak.</div>;
};

export default Home;