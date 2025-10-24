// small helpers: mobile menu + current year
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=> {
      const nav = document.querySelector('.nav');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});
