const collapseBtn = document.querySelector('.collapse_btn');
const collapseCont = document.querySelector('.collapse_cont');

collapseBtn.addEventListener('click', () => {
  if (collapseCont.classList.contains('open')) {
    collapseCont.classList.remove('open');
    collapseCont.style.height = 0;
    return;
  }
  collapseCont.style.height = '160px';
  collapseCont.classList.add('open');
});
