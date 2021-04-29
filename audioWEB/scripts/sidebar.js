// sidebar
let sidebar = document.querySelector('.sidebar')
    btnSidebar = document.querySelector('.btn_sidebar')
    fonSidebar = document.querySelector('.fon_sidebar')

btnSidebar.addEventListener('click', () => {
  fonSidebar.classList.add('fon_sidebar_active')
  sidebar.classList.add('sidebar_open')
  btnSidebar.style.opacity = '0';

})

fonSidebar.addEventListener('click', (el) => {
  if (el.target == fonSidebar) {
    fonSidebar.classList.remove('fon_sidebar_active')
    sidebar.classList.remove('sidebar_open')
    btnSidebar.style.opacity = '1';
  }
})
