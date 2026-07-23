
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('guide-modal');
  if (!modal) return;

  const closeTargets = modal.querySelectorAll('[data-guide-close]');
  const cards = document.querySelectorAll('[data-guide-open]');
  const articles = modal.querySelectorAll('[data-guide-article]');

  const openArticle = (id) => {
    articles.forEach((article) => {
      article.classList.toggle('is-active', article.getAttribute('data-guide-article') === String(id));
    });
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cards.forEach((card) => {
    const id = card.getAttribute('data-guide-open');
    card.addEventListener('click', () => openArticle(id));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openArticle(id);
      }
    });
  });

  closeTargets.forEach((target) => {
    target.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
