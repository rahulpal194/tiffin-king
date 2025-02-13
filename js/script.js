// Accordion part start

const accordionBtn = document.querySelectorAll('.accordionBtn');
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.accordion-icon');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        accordionBtn.forEach((otherBtn) => {
            const otherContent = otherBtn.nextElementSibling;
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
