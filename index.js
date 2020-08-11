window.onload = () => { 
  let loadingIcon = $('.loaded');
  let mainContent = $('main');

  console.log(mainContent[0]);

  mainContent.fadeOut();

  setInterval(() => {
    loadingIcon.attr(
      'style', 
      `
        display: block;
        background: #FFCB63;
        height: 100vh;
        width: 100vw;
        animation: loadRoller 1300ms 1 linear;
      `
      )
  }, 1000);

  loadingIcon.on('animationend', () => { 
    mainContent.fadeIn();
    $('.preloader').hide();
    $('body').attr('style', 'overflow: scroll')
  })
}