$(document).ready(() => {
 // MENU
 $('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
 });



 // CAROUSSEL
    const slickOptions = {
        autoplay: true,  
        dots: false,  
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow slick-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow slick-arrow">Next</button>;',
    };
    $('.slider').slick(slickOptions);


    // SLIDER TESTIMONIAL
    const slickOptionsTestimonial = {
      autoplay: true,  
      dots: true,  
      prevArrow: '<button type="button" class="slick-prev slider__prev-arrow slick-arrow">Previous</button>;',
      nextArrow: '<button type="button" class="slick-next slider__next-arrow slick-arrow">Next</button>;',
  };
  $('.slider-testimonial').slick(slickOptionsTestimonial);


    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'ewertonlopespereira@gmail.com',
            From : email,
            Subject : "Por favor me adicione na newsletter",
            Body : `Olá, Eu gostaria que me adicionasse na newsletter do site.
            Meu email é ${email}.
            
            Obrigado!
            `,
        }).then(
          message => alert(message)
        );
    });
  });
      