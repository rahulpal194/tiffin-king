//Header fixed onscroll part start
window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header')
    if(window.pageYOffset >= 100){
        headernav.classList.add('bg-white',"shadow-header")
    }
    else{
        headernav.classList.remove('bg-white', "shadow-header")
    }
})

// Accordion part start
const accordionBtn = document.querySelectorAll('.accordionBtn');
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        const content = btn.lastElementChild;
        const icon = btn.querySelector('.accordion-icon');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        accordionBtn.forEach((otherBtn) => {
            const otherContent = otherBtn.lastElementChild;
            const otherIcon = otherBtn.querySelector('.accordion-icon');
            if (otherBtn !== btn) {
                otherContent.style.height = '0px';
                otherIcon.classList.remove('rotate-180');
                otherContent.classList.remove('mt-3');
                otherBtn.setAttribute('aria-expanded', 'false');
            }
        });
        if (expanded) {
            content.style.height = '0px';
            icon.classList.remove('rotate-180');
            content.classList.remove('mt-3');
        } else {
            content.style.height = `${content.scrollHeight}px`;
            icon.classList.add('rotate-180');
            content.classList.add('mt-3');
        }
        btn.setAttribute('aria-expanded', !expanded);
    });
});

//Drawer part start
const drawerdivs = document.querySelectorAll('.drawer')
const drawerSets = document?.querySelectorAll("[data-drawer]");
const closedrawers = document.querySelectorAll('.close-sidebar')
drawerSets.forEach((drawerSet)=>{
    drawerSet.addEventListener('click', function(){
        const target = document.querySelector(drawerSet.dataset.drawer)
        target.classList.add('active')
        
    })
})
closedrawers.forEach(closedrawer=>{
    closedrawer.addEventListener('click', function(event){
        drawerdivs.forEach(drawerdiv=>{
            drawerdiv.classList.remove('active')
        })
    })
})
document?.addEventListener("click", function(event) {
    const isClickInsideDrawer = event.target.closest('.drawer-content') || event.target.closest('[data-drawer]');    
    if (!isClickInsideDrawer) {
        drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
        drawerdivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
        document.body.classList.remove("overflow-hidden");
    }
    event.stopPropagation();
    
});



