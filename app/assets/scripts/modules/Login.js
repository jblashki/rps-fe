import $ from 'jquery';

class Login {
  constructor() {
    this.loggedIn = 0;
    this.loginName = "";
    this.iconUrl = "";

    this.loginButton = $('#login-btn');
    this.signupButton = $('#signup-btn');

    this.logout();

    this.events();
  }

  events() {
    this.loginButton.click (this.login.bind(this.loginButton));
    this.signupButton.click (this.signup.bind(this.signupButton));
  }

  login() {
    this.loggedIn = 1;
    this.loginName = "Jonathan Blashki";
    this.iconUrl = "assets/images/profile.png";

    document.getElementById("profile-img").src=this.iconUrl;

    var itemsToHide = $('.hidden-when-logged-in');
    itemsToHide.each(function() {
      var item = $(this);
      item.addClass("concealable--hidden");
    });

    var itemsToShow = $('.hidden-when-logged-out');

    itemsToShow.each(function() {
      var item = $(this);
      item.removeClass("concealable--hidden");
    });
  }

  signup() {
    console.log("Signup!!!");
  }

  logout() {
    this.loggedIn = 0;
    this.loginName = "";
    this.iconUrl = "";

    var itemsToHide = $('.hidden-when-logged-out');
    itemsToHide.each(function() {
      var item = $(this);
      item.addClass("concealable--hidden");
    });

    var itemsToShow = $('.hidden-when-logged-in');

    itemsToShow.each(function() {
      var item = $(this);
      item.removeClass("concealable--hidden");
    });
  }
}

export default Login;
