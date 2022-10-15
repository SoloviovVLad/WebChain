// particlesJS("particles-js", {"particles":{"number":{"value":232,"density":{"enable":true,"value_area":1499}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

$(document).ready(function(){
    let positionProject = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.black-block__slider-wrapper');
    const trackProject = $('.black-block__slider-track--project');
    const itemProject = $('.black-block__slider-item--project');
    const btnPrevProject = $('.black-block__arrow__prev--project');
    const btnNextProject = $('.black-block__arrow__next--project');
    const itemsCountProjects = itemProject.length; 
    const ItemWidth = container.width()/slidesToShow; 
    const movePosition = slidesToScroll * ItemWidth;
    //slider for scroll Projects block

    itemProject.each(function(index, itemProject){
        $(itemProject).css({
            minWidth: ItemWidth,
        });
    });

    btnPrevProject.click(function(){
        if(positionProject === 0){
            positionProject = -(movePosition * itemsCountProjects);
            setPositionProject();
        }
        positionProject +=movePosition;
        setPositionProject();
    });

    btnNextProject.click(function(){
        if(positionProject === -(movePosition * itemsCountProjects) + movePosition){
            positionProject = 0;
            setPositionProject();
        }else{
            positionProject -= movePosition;
            setPositionProject();
        }
    });

    const setPositionProject = () => {
        trackProject.css({
            transform: `translateX(${positionProject}px)`
        });
    };

    // slider for scroll Logo block
    let positionLogo = 0;
    let slidesToShowLogo;
    const slidesToScrollLogo = 1;
    const containerLogo = $('.black-block__slider-wrapper--logo');
    const trackLogo = $('.black-block__slider-track--logo');
    const itemLogo = $('.black-block__slider-item--logo');
    const btnPrevLogo = $('.black-block__arrow__prev--logo');
    const btnNextLogo = $('.black-block__arrow__next--logo');
    if ($(window).width() < 600){
        slidesToShowLogo = 1;
    }else{
        slidesToShowLogo = 3;
    }
    const itemsCountLogo = itemLogo.length; 
    const ItemWidthLogo = containerLogo.width()/slidesToShowLogo; 
    const movePositionLogo = Math.ceil(slidesToScrollLogo * ItemWidthLogo);
  
        console.log("more600" ,slidesToShowLogo);

    itemLogo.each(function(index, itemLogo){
        $(itemLogo).css({
            minWidth: ItemWidthLogo,
        });
    });
    if ($(window).width() < 600){
        btnPrevLogo.click(function(){
            if(positionLogo === 0){
                positionLogo = -(movePositionLogo * itemsCountLogo);
                setPositionLogo();
            }
            positionLogo +=movePositionLogo;
            setPositionLogo();
        });
    
        btnNextLogo.click(function(){
            if(positionLogo === -(movePositionLogo * itemsCountLogo) + movePositionLogo){
                positionLogo = 0;
                setPositionLogo();
            }else{
                positionLogo -= movePositionLogo;
                setPositionLogo();
            }
        });
    }else{
        btnPrevLogo.click(function(){
            console.log(positionLogo);
            if(positionLogo === 0){
                positionLogo = Math.ceil(-(movePositionLogo * itemsCountLogo)+ 2*ItemWidthLogo);
                // positionLogo = itemLeft;
               
                setPositionLogo();
            }
            positionLogo +=movePositionLogo;
            setPositionLogo();
        });
        
        btnNextLogo.click(function(){
            const itemLeft = Math.ceil(itemsCountLogo - (Math.abs(positionLogo) + slidesToShowLogo * ItemWidthLogo) / ItemWidthLogo);
                
                console.log(itemLeft);
                if(itemLeft === 0){
                    positionLogo = 0;
                    setPositionLogo();
                }else{
                    positionLogo -= movePositionLogo;
                    setPositionLogo();
                }
            });
    }
  

   

    const setPositionLogo = () => {
        trackLogo.css({
            transform: `translateX(${positionLogo}px)`
        });
    };

    //circles on line
    function loop() {     
        $('.content__line__circle-on-line--1').animate({top: "+=20%"},
             5000).animate({top: "0%"}, 5000, loop);
        $('.content__line__circle-on-line--2').animate({top: "-=20%"},
             5000).animate({top: "+=20%"}, 5000, loop);
        $('.content__line__circle-on-line--3').animate({top: "+=20%"}, 
            5000).animate({top:"-=20%"}, 5000, loop);
        $('.content__line__circle-on-line--4').animate({top: "-=20%"},
             5000).animate({top:"+=20%"}, 5000, loop);
        $('.content__line__circle-on-line--5').animate({top: "+=19%"},
             5000).animate({top: "-=19%"}, 5000, loop);

        $('.content__line__circle-on-line--6').animate({top: "-=20%"},
             5000).animate({top: "+=20%"}, 5000, loop);
        $('.content__line__circle-on-line--7').animate({top: "+=20%"},
             5000).animate({top: "-=20%"}, 5000, loop);
        $('.content__line__circle-on-line--8').animate({top: "-=20%"}, 
            5000).animate({top:"+=20%"}, 5000, loop);
        $('.content__line__circle-on-line--9').animate({top: "+=20%"},
             5000).animate({top:"-=20%"}, 5000, loop);
        $('.content__line__circle-on-line--10').animate({top: "-=19%"},
             5000).animate({top: "+=19%"}, 5000, loop);
    }
    loop();
});
//burger
const burger = $('.header__burger');
const burgerMenu = $('.header__burger-menu');
const burgerMenuOpen = $('.header__burger-menu--open');
const body = $('body');
burger.click(function(){
    body.toggleClass('body-scroll')
    burger.toggleClass('header__burger--open');   
    burgerMenu.toggleClass('header__burger-menu--open');

});
$('a').click(function(){
    body.removeClass('body-scroll')
    burger.removeClass('header__burger--open');   
    burgerMenu.removeClass('header__burger-menu--open');
});

