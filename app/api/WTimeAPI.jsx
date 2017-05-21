import Axios from 'axios'

var WTimeAPI = {

  Private: {
    clientName: 'wtime-client',
    clientSecret: 'secret',
    apiUrl: 'http://localhost:8080/'
  },

  Public: {
    loginUser: function (username, password) {
      console.log(username);
      console.log(password);

      var encodedUsername = encodeURIComponent(username);
      var encodedPassword = encodeURIComponent(password);

      var loginUrl = `${WTimeAPI.Private.apiUrl}oauth/token?grant_type=password&username=${encodedUsername}&password=${encodedPassword}`

      return Axios({
        method: 'POST',
        url: loginUrl,
        auth: {
          username: WTimeAPI.Private.clientName,
          password: WTimeAPI.Private.clientSecret
        }
      }).then((res) => {
        return {username: username, accessToken: res.data.access_token}
      });
    },

    getProjects: function (accessToken) {

      var projectsUrl = `${WTimeAPI.Private.apiUrl}projects?access_token=${accessToken}`;

      return Axios({
        method: 'GET',
        url: projectsUrl
      }).then((res) => {
        return res.data
      });

    },

    getProject: function (accessToken, projectId) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}projects/${projectId}?access_token=${accessToken}`;

      return Axios({
        method: 'GET',
        url: projectUrl
      }).then((res) => {
        return res.data
      });

    }
  }

}

export default WTimeAPI.Public