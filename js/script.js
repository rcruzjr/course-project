/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function show1(){
    // document.getElementById('div1').style.display ='block';
    let selecteED =  document.querySelector('input[name=tab]:checked').value;
    console.log(selecteED);
    if (selecteED == "hs") {
        document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div3-no').style.display = 'none'; 
        document.getElementById('div4').style.display = 'none'; 
        document.getElementById('div3-yes').style.display = 'none';
        document.getElementById('div4-mas').style.display = 'none';
        document.getElementById('div4-sec').style.display = 'none';
    }
    if (selecteED == "cc") {
        document.getElementById('div1').style.display = 'none'; 
        document.getElementById('div2').style.display = 'block'; 
        document.getElementById('div4').style.display = 'none'; 
        document.getElementById('div4-mas').style.display = 'none';
        document.getElementById('div4-sec').style.display = 'none';
    }
    if (selecteED == "finished") {
        document.getElementById('div1').style.display = 'none';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div4').style.display = 'block';
        document.getElementById('div3-yes').style.display = 'none';
        document.getElementById('div3-no').style.display = 'none'; 
    }
}
function show2(){
    let sec_selected =  document.querySelector('input[name=transfer]:checked').value;
    console.log(sec_selected);
    if (sec_selected == "no") {
        document.getElementById('div3-no').style.display = 'block';
        document.getElementById('div3-yes').style.display = 'none';
    } else {
        document.getElementById('div3-yes').style.display = 'block';
        document.getElementById('div3-no').style.display = 'none';
    }
    // document.getElementById('div2').style.display = 'block';
}

function show3(){
    let third_selected =  document.querySelector('input[name=grad]:checked').value;
    console.log(third_selected);
    if (third_selected == "grad1") {
        document.getElementById('div4-mas').style.display = 'block';
        document.getElementById('div4-sec').style.display = 'none';
    } else {
        document.getElementById('div4-sec').style.display = 'block';
        document.getElementById('div4-mas').style.display = 'none';
    }
    // document.getElementById('div2').style.display = 'block';
}
