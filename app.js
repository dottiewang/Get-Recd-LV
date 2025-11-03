// Simple frontend behavior: theme toggle, form handling, and small accessibility helpers

// Define arrays and functions in the global scope
const restaurants = [
  'https://secretpizzalv.hey-restaurants.com/',
  'https://stksteakhouse.com/en-us/location/las-vegas/',
  'https://lpmrestaurants.com/lasvegas/',
  'https://www.momofuku.com/restaurants/las-vegas',
  'https://taogroup.com/venues/tao-asian-bistro-las-vegas/',
  'https://komodolv.com/',
  'https://www.fontainebleaulasvegas.com/dining/restaurants/mother-wolf/?utm_medium=Search&utm_source=Google&utm_campaign=f&b_us_multi_search_gg_pur_evergreen&utm_content=Signature_Dining_-_Mother_Wolf_c__776633753896&utm_term=mother%20wolf%20las%20vegas_e'
];

const clubs = [
  'https://taogroup.com/venues/marquee-nightclub-las-vegas/events/',
  'https://taogroup.com/venues/hakkasan-nightclub-las-vegas/events/',
  'https://taogroup.com/venues/omnia-nightclub-las-vegas/#page-body',
  'https://www.livnightclub.com/las-vegas/events/',
  'https://taogroup.com/venues/tao-nightclub-las-vegas/worship-thursdays-events/'
];

function getRandomRestaurant() {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  window.open(restaurants[randomIndex], '_blank');
}

function getRandomClub() {
  const randomIndex = Math.floor(Math.random() * clubs.length);
  window.open(clubs[randomIndex], '_blank');
}

(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const yearEl = document.getElementById('year');

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      themeToggle.textContent = '☀️';
      themeToggle.setAttribute('aria-pressed','true');
    } else {
      root.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
      themeToggle.setAttribute('aria-pressed','false');
    }
  }

  // Initialize theme from localStorage or prefers-color-scheme
  const stored = localStorage.getItem('theme');
  if(stored){
    applyTheme(stored);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', ()=>{
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  // Simple form submit handler with client-side validation
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    formStatus.textContent = '';

    const data = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim()
    };

    if(!data.name || data.name.length < 2){
      formStatus.textContent = 'Please enter your name (2+ chars).';
      return;
    }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)){
      formStatus.textContent = 'Please enter a valid email.';
      return;
    }
    if(!data.message){
      formStatus.textContent = 'Please enter a message.';
      return;
    }

    // simulate sending
    formStatus.textContent = 'Sending...';
    setTimeout(()=>{
      formStatus.textContent = 'Thanks — your message was sent.';
      contactForm.reset();
    }, 900);
  });

  // Fill year
  yearEl.textContent = new Date().getFullYear();

})();
