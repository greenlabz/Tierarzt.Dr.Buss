
/* Booking Widget – Tierarztpraxis Dr. Buss */
(function () {
  const root = document.getElementById('bookingWidget');
  if (!root) return;

  const GC_SCHEDULE_ID = 'AcZssZ2AZKUqcQ8ewZuZ7_zB3Zt-tnfOqN4_TMTUt94ogi3xFXWGTYsoy8cpW5k14FVzPlIfsEPabcz_';
  const GC_BASE = `https://calendar.google.com/calendar/appointments/schedules/${GC_SCHEDULE_ID}`;

  const SCHEDULE = {
    1: { vm: ['10:30','11:00','11:30'], nm: ['16:30','17:00','17:30','18:00','18:30'] },
    2: { vm: ['10:30','11:00','11:30'], nm: ['16:30','17:00','17:30','18:00','18:30'] },
    3: { vm: ['10:30','11:00','11:30'], nm: ['16:30','17:00','17:30','18:00','18:30'] },
    4: { vm: ['11:00','11:30'],         nm: ['16:30','17:00','17:30','18:00','18:30'] },
    5: { vm: ['11:00','11:30'],         nm: ['16:30','17:00','17:30','18:00','18:30'] },
  };

  const DE_MONTHS  = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  const DE_WD_S    = ['Mo','Di','Mi','Do','Fr','Sa','So'];
  const DE_WD_FULL = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];

  let curYear, curMonth;
  let selDate = null;
  let selSlot = null;

  const now = new Date();
  curYear = now.getFullYear();
  curMonth = now.getMonth();

  function qs(id) { return root.querySelector(id); }
  function qsa(sel) { return root.querySelectorAll(sel); }

  function renderCal () {
    qs('#calTitle').textContent = `${DE_MONTHS[curMonth]} ${curYear}`;
    const grid = qs('#calGrid');
    grid.innerHTML = '';

    DE_WD_S.forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal__dow';
      el.textContent = d;
      grid.appendChild(el);
    });

    const today = new Date(); today.setHours(0,0,0,0);
    const first = new Date(curYear, curMonth, 1);
    const offset = (first.getDay() + 6) % 7;
    const total = new Date(curYear, curMonth + 1, 0).getDate();

    for (let i = 0; i < offset; i++) {
      const el = document.createElement('div');
      el.className = 'cal__day cal__day--empty';
      grid.appendChild(el);
    }

    for (let d = 1; d <= total; d++) {
      const date = new Date(curYear, curMonth, d);
      const dow = date.getDay();
      const el = document.createElement('div');
      el.textContent = d;

      if (dow === 0 || dow === 6) {
        el.className = 'cal__day cal__day--weekend';
      } else if (date < today) {
        el.className = 'cal__day cal__day--past';
      } else {
        el.className = 'cal__day cal__day--avail';
        if (date.getTime() === today.getTime()) el.classList.add('cal__day--today');
        if (selDate && date.getTime() === selDate.getTime()) el.classList.add('cal__day--selected');

        const dot = document.createElement('div');
        dot.className = 'cal__dot';
        el.appendChild(dot);

        el.addEventListener('click', () => selectDate(date, el));
      }
      grid.appendChild(el);
    }
  }

  function selectDate (date, el) {
    selDate = date;
    selSlot = null;
    qs('#btnStep2').disabled = true;
    qsa('.cal__day--selected').forEach(e => e.classList.remove('cal__day--selected'));
    el.classList.add('cal__day--selected');
    renderSlots(date);
  }

  function renderSlots (date) {
    const dow = date.getDay();
    const sched = SCHEDULE[dow];
    const ph = qs('#slotsPlaceholder');
    const con = qs('#slotsContent');

    ph.style.display = 'none';
    con.style.display = 'block';
    con.innerHTML = '';

    const hdr = document.createElement('div');
    hdr.className = 'slots__header';
    hdr.innerHTML = `
      <div class="slots__date">${DE_WD_FULL[dow-1]}, ${date.getDate()}. ${DE_MONTHS[date.getMonth()]}</div>
      <div class="slots__sub">${date.getFullYear()} · Wählen Sie eine Uhrzeit</div>`;
    con.appendChild(hdr);

    if (sched) {
      con.appendChild(buildSlotSection('☀️ Vormittag', sched.vm));
      con.appendChild(buildSlotSection('🌤 Nachmittag', sched.nm));
    }
  }

  function buildSlotSection (title, times) {
    const sec = document.createElement('div');
    sec.className = 'slots__section';
    const hdr = document.createElement('div');
    hdr.className = 'slots__section-title';
    hdr.textContent = title;
    sec.appendChild(hdr);
    const grid = document.createElement('div');
    grid.className = 'slots__grid';
    times.forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot';
      btn.textContent = t;
      btn.addEventListener('click', () => {
        qsa('.slot.selected').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selSlot = t;
        qs('#btnStep2').disabled = false;
      });
      grid.appendChild(btn);
    });
    sec.appendChild(grid);
    return sec;
  }

  function showPanel (n) {
    qsa('.bk__panel').forEach(p => p.classList.remove('active'));
    qs(`#panel-${n}`).classList.add('active');

    for (let i = 1; i <= 3; i++) {
      const si = qs(`#si-${i}`);
      if (!si) continue;
      si.classList.remove('active','done');
      if (i < n) si.classList.add('done');
      else if (i === n) si.classList.add('active');
    }

    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function fmtDate (date) {
    const dow = date.getDay();
    return `${DE_WD_FULL[dow-1]}, ${date.getDate()}. ${DE_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  }

  function prevMonth () {
    curMonth--;
    if (curMonth < 0) { curMonth = 11; curYear--; }
    renderCal();
  }

  function nextMonth () {
    curMonth++;
    if (curMonth > 11) { curMonth = 0; curYear++; }
    renderCal();
  }

  function goStep1 () { showPanel(1); }

  function goStep2 () {
    if (!selDate || !selSlot) return;
    qs('#pillDate').textContent = fmtDate(selDate);
    qs('#pillTime').textContent = `${selSlot} Uhr`;
    showPanel(2);
  }

  function goStep3 () {
    const first = qs('#fName').value.trim();
    const last = qs('#fLastname').value.trim();
    const email = qs('#fEmail').value.trim();
    const phone = qs('#fPhone').value.trim();
    const petName = qs('#fPetName').value.trim();
    const petType = qs('#fPetType').value.trim();
    const reason = qs('#fReason').value.trim();

    if (!first || !last || !email || !phone || !petName || !petType || !reason) {
      window.alert('Bitte füllen Sie alle Pflichtfelder aus: Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Tiername, Tierart und Grund des Termins.');
      return;
    }

    qs('#cDate').textContent = fmtDate(selDate);
    qs('#cTime').textContent = `${selSlot} Uhr`;
    qs('#cName').textContent = `${first} ${last}`;
    qs('#cPhone').textContent = phone;
    qs('#cPetName').textContent = petName;
    qs('#cPetType').textContent = petType;
    qs('#cReason').textContent = reason;
    showPanel(3);
  }

  function confirmBooking () {
    if (!selDate || !selSlot) return;

    const pad = n => String(n).padStart(2,'0');
    const ds = `${selDate.getFullYear()}-${pad(selDate.getMonth()+1)}-${pad(selDate.getDate())}`;
    const email = qs('#fEmail').value.trim();
    const params = new URLSearchParams({ gv: 'true', date: ds });
    if (email) params.set('email', email);

    const targetUrl = `${GC_BASE}?${params.toString()}`;
    const openedWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      window.location.href = targetUrl;
      return;
    }

    qs('#successAppt').textContent = `${fmtDate(selDate)} · ${selSlot} Uhr`;
    showPanel(4);
  }

  root.addEventListener('click', (event) => {
    const action = event.target.closest('[data-bk-action]');
    if (!action) return;
    const type = action.getAttribute('data-bk-action');
    if (type === 'prev-month') prevMonth();
    if (type === 'next-month') nextMonth();
    if (type === 'step-2') goStep2();
    if (type === 'step-1') goStep1();
    if (type === 'step-3') goStep3();
    if (type === 'confirm') confirmBooking();
    if (type === 'step-2-back') showPanel(2);
  });

  renderCal();
})();
