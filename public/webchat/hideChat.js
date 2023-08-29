function hide() {
    $(customPlugin.command('WebChat.hideChatButton',getAdvancedConfigProactive()));
    $('.overlay, .popup').fadeOut(100);
  }
hide();