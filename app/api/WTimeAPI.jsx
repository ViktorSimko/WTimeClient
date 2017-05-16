import Axios from 'axios'

var WTimeAPI = {

  Private: {
    clientName: 'wtime-client',
    clientSecret: 'secret',
    apiUrl: 'http://localhost:8000/'
  },

  Public: {
    loginUser: function (userName, password) {
      console.log(userName);
      console.log(password);

      var loginUrl = `${WTimeAPI.Private.apiUrl}oauth/token?grant_type=password&username=${userName}&password=${password}`

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