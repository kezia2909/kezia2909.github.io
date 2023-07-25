const navBarItems = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navBarItems.forEach(item => {
    console.log(windowPathname);
    if(item.href.includes(windowPathname)){
        item.classList.add('active');
    }
    else{
        item.classList.remove('active');
    }
});
