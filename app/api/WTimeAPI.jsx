import Axios from 'axios'

var WTimeAPI = {

  Private: {
    clientName: 'wtime-client',
    clientSecret: 'secret',
    apiUrl: 'http://localhost:8080/'
  },

  Public: {
    loginUser: function (userName, password) {
      console.log(userName);
      console.log(password);

      var encodedUserName = encodeURIComponent(userName);
      var encodedPassword = encodeURIComponent(password);

      var loginUrl = `${WTimeAPI.Private.apiUrl}oauth/token?grant_type=password&username=${encodedUserName}&password=${encodedPassword}`

      return Axios({
        method: 'POST',
        url: loginUrl,
        auth: {
          username: WTimeAPI.Private.clientName,
          password: WTimeAPI.Private.clientSecret
        }
      }).then((res) => {
        console.log(res);
      });
    }
  }

}

export default WTimeAPI.Public