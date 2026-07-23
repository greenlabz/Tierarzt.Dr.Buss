
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('guide-modal');
  if (!modal) return;

  const closeTargets = modal.querySelectorAll('[data-guide-close]');
  const cards = document.querySelectorAll('[data-guide-open]');
  const articles = modal.querySelectorAll('[data-guide-article]');
  let modalTrigger = null;

  const openArticle = (id, trigger) => {
    modalTrigger = trigger || document.activeElement;
    articles.forEach((article) => {
      article.classList.toggle('is-active', article.getAttribute('data-guide-article') === String(id));
    });
    modal.removeAttribute('inert');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('[data-guide-close]')?.focus();
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('inert', '');
    document.body.style.overflow = '';
    modalTrigger?.focus();
  };

  cards.forEach((card) => {
    const id = card.getAttribute('data-guide-open');
    card.addEventListener('click', () => openArticle(id, card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openArticle(id, card);
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
