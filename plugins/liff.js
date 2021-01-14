const liffId = process.env.LIFF_ID;

export default function ({ app }, inject) {
  let liff = null;

  if(process.browser) {
    liff = require('@line/liff');
    liff.init({ liffId }).then(() => {
      const queryString = decodeURIComponent(window.location.search).replace("?liff.state=", "");
      const params = new URLSearchParams(queryString);
      const QID = params.get('QID');
      const redirectUri = process.env.BASE_URL + (QID ? `/coupons/${QID}` : '/');
      if(!liff.isInClient() && !liff.isLoggedIn()) {
        liff.login({redirectUri});
      } else if (liff.isLoggedIn() && QID) {
        window.location.href = redirectUri;
      }
    });
  }

  inject('liff', Promise.resolve(liff));
}
