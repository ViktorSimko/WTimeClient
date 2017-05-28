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

    registerUser: function (username, password) {
      console.log(username);
      console.log(password);

      var encodedUsername = encodeURIComponent(username);
      var encodedPassword = encodeURIComponent(password);

      var registerUrl = `${WTimeAPI.Private.apiUrl}users/register/${encodedUsername}/${encodedPassword}`

      return Axios({
        method: 'GET',
        url: registerUrl,
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

    },

    postProject: function (accessToken, project) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}projects?access_token=${accessToken}`;

      return Axios({
        method: 'POST',
        url: projectUrl,
        data: project
      }).then((res) => {
        return res.data
      });

    },

    getTasks: function (accessToken, projectId) {

      var projectsUrl = `${WTimeAPI.Private.apiUrl}projects/${projectId}/tasks?access_token=${accessToken}`;

      return Axios({
        method: 'GET',
        url: projectsUrl
      }).then((res) => {
        return res.data
      });

    },

    getTask: function (accessToken, taskId) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}tasks/${taskId}?access_token=${accessToken}`;

      return Axios({
        method: 'GET',
        url: projectUrl
      }).then((res) => {
        return res.data
      });

    },

    postTask: function (accessToken, task) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}tasks?access_token=${accessToken}`;

      return Axios({
        method: 'POST',
        url: projectUrl,
        data: task
      }).then((res) => {
        return res.data
      });

    },

    getWorkIntervals: function (accessToken, taskId) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}tasks/${taskId}/work_intervals?access_token=${accessToken}`;

      return Axios({
        method: 'GET',
        url: projectUrl
      }).then((res) => {
        return res.data
      });

    },

    postWorkInterval: function (accessToken, work_interval) {

      var projectUrl = `${WTimeAPI.Private.apiUrl}work_intervals?access_token=${accessToken}`;

      return Axios({
        method: 'POST',
        url: projectUrl,
        data: work_interval
      }).then((res) => {
        return res.data
      });

    },
  }

}

export default WTimeAPI.Public