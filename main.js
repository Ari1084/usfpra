// mobile menu
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// fade sections in as you scroll
var reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('shown');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function (el) { io.observe(el); });
} else {
  reveals.forEach(function (el) { el.classList.add('shown'); });
}

// forms are collected by Netlify Forms
document.querySelectorAll('form[data-netlify]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.form-msg');
    var email = form.querySelector('input[type=email]');
    msg.className = 'form-msg';
    if (email && !/^\S+@\S+\.\S+$/.test(email.value)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.classList.add('error');
      email.focus();
      return;
    }
    var required = form.querySelectorAll('[required]');
    for (var i = 0; i < required.length; i++) {
      if (!required[i].value.trim()) {
        msg.textContent = 'Please fill out all required fields.';
        msg.classList.add('error');
        required[i].focus();
        return;
      }
    }
    // sign-ups move to a Google Form; until it's linked, don't pretend to submit
    msg.textContent = 'Online sign-up is opening soon. Please check back in a day or two!';
  });
});

document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
