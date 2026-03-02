const revealElements: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal');

const revealOnScroll = (): void => {
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add('opacity-100', 'translate-y-0');
      element.classList.remove('opacity-0', 'translate-y-8');
    }
  });
};

revealElements.forEach((element) => {
  element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
