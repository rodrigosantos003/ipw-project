function googleLogin() {
  window.open(
    "https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
  );
}

function facebookLogin() {
  window.open("https://www.facebook.com/?ocid=topsitePT-PT");
}