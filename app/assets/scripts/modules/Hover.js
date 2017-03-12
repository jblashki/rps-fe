import $ from 'jquery';

class Hover {
  constructor() {
    this.profileIcon = $(".site-header__profile-link");
    this.hoverableButtons = $(".btn--hoverable");
    this.gamePanelOptions = $(".game-panel__option");
    this.events();
  }

  events() {
    var that = this;

    this.profileIcon.mouseover (this.hoverHeaderProfileLinkIcon.bind(this.profileIcon));
    this.profileIcon.mouseout (this.unhoverHeaderProfileLinkIcon.bind(this.profileIcon));

    this.hoverableButtons.each(function() {
      var currentButton = $(this);
      currentButton.mouseover (that.hoverButton.bind(currentButton));
      currentButton.mouseout (that.unhoverButton.bind(currentButton));
    });

    this.gamePanelOptions.each(function() {
      var currentPanelOption = $(this);
      currentPanelOption.mouseover (that.hoverGamePanelOptions.bind(currentPanelOption));
      currentPanelOption.mouseout (that.unhoverGamePanelOptions.bind(currentPanelOption));
    });

  }

  hoverGamePanelOptions() {
    this.addClass("game-panel__option--hover");
  }

  unhoverGamePanelOptions() {
    this.removeClass("game-panel__option--hover");
  }

  hoverButton() {
    this.addClass("btn--hover");
  }

  unhoverButton() {
    this.removeClass("btn--hover");
  }

  hoverHeaderProfileLinkIcon() {
    this.addClass("site-header__profile-link--hover");
  }

  unhoverHeaderProfileLinkIcon() {
    this.removeClass("site-header__profile-link--hover");
  }
}

export default Hover;
