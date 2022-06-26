const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');


//show my phone menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.Style.display = 'none';
    closeBtn.style.display = 'inline-block';

})


//hide my phone menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.Style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

// NavBar EFFECTS

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

// READmore about section

const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent = "Réduire";
    } else {
        readMoreBtn.textContent = "Voir plus"
    }
})
