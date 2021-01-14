import https from "https";
const agent = new https.Agent({
  rejectUnauthorized: false
});

export default function ({ $axios, store, app }) {

  $axios.onRequest((config) => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.headers["Access-Control-Allow-Origin"] = "*";
    // store.dispatch("message/clearMessages");
    config.httpsAgent = agent;
  });

  // $axios.onResponse((response) => {
  //   console.log(response)
  // });

  $axios.onError(async (error) => {
    if(!error.response) {
      return console.error(error);
    }
    const { status } = error.response;
    if(status !== 401) {
      return Promise.reject(error);
    }
    return Promise.reject(e);
  });
}
