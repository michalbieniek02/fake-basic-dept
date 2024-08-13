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




document.addEventListener('scroll', () => {
    const section4 = document.getElementById('section4');
    const section5 = document.getElementById('section5');
    const section6 = document.getElementById('section6');

    const gapper = document.getElementById('gapper')
    const navbar = document.getElementById('navbar');
    const button1 = document.getElementById('btn1')
    const button2 = document.getElementById('btn2')
    const body = document.body;

    const rect4 = section4.getBoundingClientRect();
    const rect5 = section5.getBoundingClientRect();
    const rect6 = section6.getBoundingClientRect();

    if (rect5.top <= 0 && rect5.bottom >= 0) {
        body.classList.add('bg-darkBg', 'text-darkTxt');
        body.classList.remove('bg-white', 'text-black');
        navbar.classList.add('bg-darkBg', 'text-darkTxt');
        navbar.classList.remove('bg-black','bg-opacity-10', 'text-white');
        gapper.classList.add('bg-darkTxt')
        gapper.classList.remove('bg-black')
        button1.classList.add('border-darkTxt')
        button1.classList.remove('border-black')
        button2.classList.add('border-darkTxt')
        button2.classList.remove('border-black')
    } else if (rect6.top <= 0 && rect6.bottom >= 0) {
        body.classList.add('bg-white', 'text-black');
        body.classList.remove('bg-darkBg', 'text-darkTxt');
        navbar.classList.add('bg-black','bg-opacity-10', 'text-white');
        navbar.classList.remove('bg-darkBg', 'text-darkTxt');
        gapper.classList.remove('bg-darkTxt')
        gapper.classList.add('bg-black')
        button1.classList.add('border-black')
        button1.classList.remove('border-darkTxt')  
        button2.classList.add('border-black')
        button2.classList.remove('border-darkTxt')
    } else if (rect4.top<= 0 && rect4.bottom>=0){
        body.classList.add('bg-white', 'text-black');
        body.classList.remove('bg-darkBg', 'text-darkTxt');
        navbar.classList.add('bg-black','bg-opacity-10', 'text-white');
        navbar.classList.remove('bg-darkBg', 'text-darkTxt');
        gapper.classList.remove('bg-darkTxt')
        gapper.classList.add('bg-black')
        button1.classList.add('border-black')
        button1.classList.remove('border-darkTxt')
        button2.classList.add('border-black')
        button2.classList.remove('border-darkTxt')
    }
});
