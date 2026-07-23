/* ===================================================
   Tierarztpraxis Dr. Buss – Haupt-JavaScript
   =================================================== */

/* --- Mobile Navigation Toggle --- */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuIcon = document.querySelector('[data-menu-icon]');
  if (!menuBtn || !mobileMenu) return;

  const menuLinks = mobileMenu.querySelectorAll('a');

  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Menü schließen');
    if (menuIcon) menuIcon.textContent = 'close';
  };

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Menü öffnen');
    if (menuIcon) menuIcon.textContent = 'menu';
  };

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mobileMenu.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  mobileMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', (event) => {
    if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});


/* ================================================
   Modal- & Formular-Logik
   ================================================ */

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-hours');
  const modalContent = document.getElementById('modal-content');
  const openBtns = document.querySelectorAll('[data-open-modal="hours"]');
  const closeBtns = document.querySelectorAll('[data-close-modal]');
  let modalTrigger = null;

  if (modal && modalContent) {
    const openModal = (event) => {
      modalTrigger = event?.currentTarget || document.activeElement;
      modal.removeAttribute('inert');
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
        modal.querySelector('[data-close-modal]')?.focus();
      }, 10);
    };

    const closeModal = () => {
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('inert', '');
        modalTrigger?.focus();
      }, 300);
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // Kalender initialisieren falls vorhanden (für Google Iframe nicht mehr nötig)
});

// --- Google Form Integration ---
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('google-contact-form');
  if (!contactForm) return;

  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnIcon = document.getElementById('btn-icon');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // UI-Status: Laden
    if (btnText) btnText.textContent = 'Wird gesendet...';
    if (btnIcon) btnIcon.textContent = 'hourglass_empty';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

    // Daten sammeln
    const formData = new FormData(contactForm);
    
    // Vor- und Nachname kombinieren für Google Form (entry.500545182)
    const vorname = formData.get('vorname');
    const nachname = formData.get('nachname');
    const vollerName = `${vorname} ${nachname}`.trim();
    
    // Google Form Parameter vorbereiten
    const googleUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBSUO28RlR3oumtd7IygkK0Jsb9FAdsOBuaIMb5sFsM9z8Ow/formResponse';
    const params = new URLSearchParams();
    
    // Mapped Google Fields
    params.append('entry.500545182', vollerName);
    params.append('entry.1559384980', formData.get('entry.1559384980')); // Telefon
    params.append('entry.1333836707', formData.get('entry.1333836707')); // E-Mail
    params.append('entry.2008802765', formData.get('entry.2008802765')); // Patient
    params.append('entry.1353340278', formData.get('entry.1353340278')); // Anliegen
    params.append('entry.1775313316', formData.get('entry.1775313316')); // Datenschutz
    
    // Senden via Fetch (no-cors Mode für Google Forms)
    fetch(googleUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: params
    })
    .then(() => {
      // Erfolg (bei no-cors sehen wir die Antwort nicht, nehmen aber Erfolg an)
      showStatus('Vielen Dank! Ihre Nachricht wurde erfolgreich an uns übermittelt.', 'success');
      contactForm.reset();
    })
    .catch(error => {
      console.error('Fehler beim Senden:', error);
      showStatus('Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.', 'error');
    })
    .finally(() => {
      // UI-Status zurücksetzen
      if (btnText) btnText.textContent = 'Nachricht senden';
      if (btnIcon) btnIcon.textContent = 'send';
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
    });
  });

  function showStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800');
    
    if (type === 'success') {
      formStatus.classList.add('bg-green-100', 'text-green-800');
    } else {
      formStatus.classList.add('bg-red-100', 'text-red-800');
    }
    
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Nach 10 Sekunden ausblenden
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 10000);
  }
});


// --- Termin-Popup auf der Startseite ---
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('appointment-popup');
  const popupContent = document.getElementById('appointment-popup-content');
  const closeBtns = document.querySelectorAll('[data-close-appointment-popup]');
  const popupLink = document.getElementById('appointment-popup-link');
  const sessionKey = 'tierarztpraxis_appointment_popup_seen';

  if (!popup || !popupContent) return;

  let popupTimer = null;
  let hasSeenPopupThisSession = false;

  try {
    hasSeenPopupThisSession = window.sessionStorage.getItem(sessionKey) === 'true';
  } catch (error) {
    console.warn('Popup-Session konnte nicht gelesen werden.', error);
  }

  const openPopup = () => {
    try {
      window.sessionStorage.setItem(sessionKey, 'true');
    } catch (error) {
      console.warn('Popup-Session konnte nicht gespeichert werden.', error);
    }

    popup.classList.remove('hidden');
    popup.classList.add('flex');
    requestAnimationFrame(() => {
      popupContent.classList.remove('scale-95', 'opacity-0');
      popupContent.classList.add('scale-100', 'opacity-100');
    });
  };

  const closePopup = () => {
    popupContent.classList.remove('scale-100', 'opacity-100');
    popupContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      popup.classList.add('hidden');
      popup.classList.remove('flex');
    }, 250);
  };

  if (!hasSeenPopupThisSession) {
    popupTimer = window.setTimeout(openPopup, 5000);
  }

  closeBtns.forEach((btn) => btn.addEventListener('click', () => {
    if (popupTimer) window.clearTimeout(popupTimer);
    closePopup();
  }));

  popupLink?.addEventListener('click', () => {
    if (popupTimer) window.clearTimeout(popupTimer);
    closePopup();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
      closePopup();
    }
  });
});


// --- Cookie-Banner ---
document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptAllBtn = document.getElementById('cookie-accept-all');
  const acceptNecessaryBtn = document.getElementById('cookie-accept-necessary');
  const storageKey = 'tierarztpraxis_cookie_consent_v2';

  if (!cookieBanner) return;

  let hasDecision = null;
  try {
    hasDecision = window.localStorage.getItem(storageKey);
  } catch (error) {
    console.warn('Cookie-Entscheidung konnte nicht gelesen werden.', error);
  }

  const hideBanner = () => {
    cookieBanner.classList.add('hidden');
  };

  const saveDecision = (value) => {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch (error) {
      console.warn('Cookie-Entscheidung konnte nicht gespeichert werden.', error);
    }
    hideBanner();
  };

  if (!hasDecision) {
    cookieBanner.classList.remove('hidden');
  }

  acceptAllBtn?.addEventListener('click', () => saveDecision('all'));
  acceptNecessaryBtn?.addEventListener('click', () => saveDecision('necessary'));
});


/* --- Leistungs-Karten Flip --- */
document.addEventListener('DOMContentLoaded', () => {
  const flipCards = document.querySelectorAll('.service-flip-card');
  if (!flipCards.length) return;

  const setExpanded = (card, state) => {
    const trigger = card.querySelector('[data-flip-card-toggle]');
    if (trigger) trigger.setAttribute('aria-expanded', state ? 'true' : 'false');
  };

  const closeAllExcept = (currentCard) => {
    flipCards.forEach((card) => {
      if (card !== currentCard) {
        card.classList.remove('is-flipped');
        setExpanded(card, false);
      }
    });
  };

  flipCards.forEach((card) => {
    const openBtn = card.querySelector('[data-flip-card-toggle]');
    const closeBtn = card.querySelector('[data-flip-card-close]');

    if (openBtn) {
      openBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const willOpen = !card.classList.contains('is-flipped');
        closeAllExcept(card);
        card.classList.toggle('is-flipped', willOpen);
        setExpanded(card, willOpen);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        card.classList.remove('is-flipped');
        setExpanded(card, false);
      });
    }
  });
});


// --- Floating Back-to-Top Button ---
document.addEventListener('DOMContentLoaded', () => {
  const topButton = document.getElementById('back-to-top-button');
  const acceptAllBtn = document.getElementById('cookie-accept-all');
  const acceptNecessaryBtn = document.getElementById('cookie-accept-necessary');
  const storageKey = 'tierarztpraxis_cookie_consent_v2';

  if (!topButton) return;

  const hasConsentDecision = () => {
    try {
      return Boolean(window.localStorage.getItem(storageKey));
    } catch (error) {
      return false;
    }
  };

  const updateTopButtonVisibility = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const threshold = Math.max(scrollableHeight * 0.5, 260);
    const shouldShow = hasConsentDecision() && window.scrollY >= threshold;

    topButton.classList.toggle('is-visible', shouldShow);
  };

  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateTopButtonVisibility, { passive: true });
  window.addEventListener('resize', updateTopButtonVisibility);

  acceptAllBtn?.addEventListener('click', () => {
    window.setTimeout(updateTopButtonVisibility, 40);
  });

  acceptNecessaryBtn?.addEventListener('click', () => {
    window.setTimeout(updateTopButtonVisibility, 40);
  });

  updateTopButtonVisibility();
});


/* --- Testimonials Carousel --- */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-testimonials-carousel]');
  if (!carousel) return;

  const viewport = carousel.querySelector('[data-testimonials-viewport]');
  const cards = Array.from(carousel.querySelectorAll('[data-testimonial-card]'));
  const dotsWrap = carousel.querySelector('[data-testimonials-dots]');
  const prevBtn = carousel.querySelector('[data-testimonials-prev]');
  const nextBtn = carousel.querySelector('[data-testimonials-next]');

  if (!viewport || !cards.length || !dotsWrap) return;

  const dots = cards.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'testimonials-carousel__dot' + (index === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Bewertung ${index + 1} anzeigen`);
    dot.addEventListener('click', () => scrollToIndex(index));
    dotsWrap.appendChild(dot);
    return dot;
  });

  const cardStep = () => {
    if (cards.length < 2) return viewport.clientWidth;
    const first = cards[0].getBoundingClientRect();
    const second = cards[1].getBoundingClientRect();
    return Math.max(second.left - first.left, first.width);
  };

  const nearestIndex = () => {
    const step = cardStep();
    return Math.min(cards.length - 1, Math.max(0, Math.round(viewport.scrollLeft / step)));
  };

  const updateDots = () => {
    const index = nearestIndex();
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const scrollToIndex = (index) => {
    cards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    window.setTimeout(updateDots, 220);
  };

  prevBtn?.addEventListener('click', () => {
    const index = nearestIndex();
    scrollToIndex(Math.max(0, index - 1));
  });

  nextBtn?.addEventListener('click', () => {
    const index = nearestIndex();
    scrollToIndex(Math.min(cards.length - 1, index + 1));
  });

  viewport.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDots);
  }, { passive: true });

  window.addEventListener('resize', updateDots);
  updateDots();
});


/* --- Google Reviews Button Fallback --- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-google-reviews-link]').forEach((el) => {
    el.addEventListener('click', (event) => {
      const href = el.getAttribute('href');
      if (!href) return;
      event.preventDefault();
      window.location.href = href;
    });
  });
});
