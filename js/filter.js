const filter = document.querySelector('.filter');
const buttonFilter = document.querySelectorAll('.filter__button');
const listPortfolio = document.querySelector('.portfolio-card');
const itemsPortfolio = document.querySelectorAll('.portfolio-card__item');

filter.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  for (const btn of buttonFilter) {
    btn.classList.remove('active');
  }
  e.target.classList.add('active');
  const filterValue = e.target.getAttribute(['data-filter']);

  for (let i = 0; i < itemsPortfolio.length; i += 1) {
    const item = itemsPortfolio[i].getAttribute(['data-portfolio']);

    if (filterValue === 'all') {
      itemsPortfolio[i].style.display = 'block';
    } else if (filterValue === item) {
      itemsPortfolio[i].style.display = 'block';
    } else {
      itemsPortfolio[i].style.display = 'none';
    }
  }
});
