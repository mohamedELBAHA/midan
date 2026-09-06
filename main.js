(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-header nav');
  button?.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); button.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation'); nav.classList.toggle('open', !open); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); button?.setAttribute('aria-expanded', 'false'); }));
  document.getElementById('pilot-form')?.addEventListener('submit', event => {
    event.preventDefault(); const email = document.getElementById('email'); const city = document.getElementById('city'); const note = document.getElementById('form-note');
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()); const cityValid = city.value.trim().length > 1;
    email.setAttribute('aria-invalid', String(!emailValid)); city.setAttribute('aria-invalid', String(!cityValid));
    if (!emailValid || !cityValid) { note.textContent = 'Please add a valid email and your city.'; (!emailValid ? email : city).focus(); return; }
    note.textContent = 'Opening your email app…'; const subject = encodeURIComponent('Midan private pilot — ' + city.value.trim()); const body = encodeURIComponent(`Hello Midan,\n\nI would like to learn more about the private pilot.\n\nCity: ${city.value.trim()}\nEmail: ${email.value.trim()}`); window.location.href = `mailto:hello@midan.ma?subject=${subject}&body=${body}`;
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
