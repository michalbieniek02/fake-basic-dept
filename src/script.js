document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-content')

    if (!slider) {
        console.error('Element with class .slider-content not found.')
        return
    }

    let isDown = false
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        e.preventDefault()
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
    });

    slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = x - startX
        slider.scrollLeft = scrollLeft - walk
    });
});


let lastScrollTop = 0; 


document.addEventListener('scroll', () => {
    const section1 = document.getElementById('section1')
    const section2 = document.getElementById('section2')
    const section3 = document.getElementById('section3')
    const section4 = document.getElementById('section4');
    const section5 = document.getElementById('section5');
    const section6 = document.getElementById('section6');

    const gapper = document.getElementById('gapper')
    const navbar = document.getElementById('navbar');
    const button1 = document.getElementById('btn1')
    const button2 = document.getElementById('btn2')
    const logo = document.getElementById('logo')
    const menu = document.getElementById('menu')
    const body = document.body;
    

    const rect1 = section1.getBoundingClientRect();
    const rect2 = section2.getBoundingClientRect();
    const rect3 = section3.getBoundingClientRect();
    const rect4 = section4.getBoundingClientRect();
    const rect5 = section5.getBoundingClientRect();
    const rect6 = section6.getBoundingClientRect();

    if (rect1.top <= 0 && rect1.bottom >= 0) {
        navbar.classList.add( 'text-white');
        navbar.classList.remove('bg-white', 'text-black', 'bg-darkBg');
        logo.classList.add('fill-white');
        logo.classList.remove('fill-black');
        changeLinkColor('white');
        

    } else if ((rect2.top <= 0 && rect2.bottom >= 0) ||
               (rect3.top <= 0 && rect3.bottom >= 0) ||
               (rect4.top <= 0 && rect4.bottom >= 0) ||
               (rect6.top <= 0 && rect6.bottom >= 0)) {
        body.classList.add('bg-white', 'text-black');
        body.classList.remove('bg-darkBg', 'text-darkTxt');
        navbar.classList.add('bg-white', 'text-black');
        navbar.classList.remove('bg-black', 'text-white');
        gapper.classList.add('bg-black');
        gapper.classList.remove('bg-darkTxt');
        button1.classList.add('border-black');
        button1.classList.remove('border-darkTxt');
        button2.classList.add('border-black');
        button2.classList.remove('border-darkTxt');
        changeLinkColor('black');
        logo.classList.add('fill-black');
        logo.classList.remove('fill-white', 'fill-darkTxt');

    } else if (rect5.top <= 0 && rect5.bottom >= 0) {
        body.classList.add('bg-darkBg', 'text-darkTxt');
        body.classList.remove('bg-white', 'text-black');
        navbar.classList.add('bg-darkBg', 'text-darkTxt');
        navbar.classList.remove('bg-white', 'text-black');
        gapper.classList.add('bg-darkTxt');
        gapper.classList.remove('bg-black');
        button1.classList.add('border-darkTxt');
        button1.classList.remove('border-black');
        button2.classList.add('border-darkTxt');
        button2.classList.remove('border-black');
        changeLinkColor('#F9CDCD');
        logo.classList.add('fill-darkTxt');
        logo.classList.remove('fill-black', 'fill-white');
    }


    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        navbar.classList.add('-translate-y-[100px]');
    } else {
        navbar.classList.remove('-translate-y-[100px]');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 


});

function changeLinkColor(color) {
    const h1Elements = document.querySelectorAll('#navbar h1');
    const underlines = document.querySelectorAll('#under')
    h1Elements.forEach((h1) => {
        h1.style.color = color; 
    });
    underlines.forEach((underline)=>{
        underline.style.background = color;
    })
    menu.style.color = color
}
