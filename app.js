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

const nightclubs = [
  'https://getrecdlv.com/marqueenightclub.html',
  'https://getrecdlv.com/hakkasan.html',
  'https://getrecdlv.com/omnianightclub.html',
  'https://getrecdlv.com/xsnightclub.html',
  'https://getrecdlv.com/drais.html',
  'https://getrecdlv.com/tao.html',
  'https://getrecdlv.com/zouk.html',
  'https://getrecdlv.com/surrender.html'
];

const barsandlounges = [
  'https://getrecdlv.com/thechandelier.html',
  'https://getrecdlv.com/eiffeltowerlounge.html',
  'https://getrecdlv.com/thedorsey.html',
  'https://getrecdlv.com/vesperbar.html',
  'https://getrecdlv.com/skybar.html',
  'https://getrecdlv.com/thevault.html',
  'https://getrecdlv.com/1923prohibitionbar.html',
  'https://getrecdlv.com/julietcocktailroom.html'
];

let lastRecIndex = -1;

const recs = [
  {
    name: "Fremont Street Experience",
    location: "Downtown Las Vegas",
    whatItIs: "A pedestrian-only street with flashing lights, live music, and a gigantic LED canopy.",
    mustSee: "The Viva Vision light show, street performers, and classic casinos like Golden Nugget."
  },
  {
    name: "Bellagio Fountains",
    location: "Bellagio Hotel & Casino",
    whatItIs: "A stunning water show set to music, happening every 15-30 minutes.",
    mustSee: "The iconic fountain show with a mix of classical and contemporary tunes."
  },
  {
    name: "The Venetian Resort",
    location: "The Strip",
    whatItIs: "A luxury resort with indoor canals, gondola rides, and an Italian-inspired atmosphere.",
    mustSee: "The Grand Canal Shoppes and gondola rides through the canals."
  },
  {
    name: "High Roller Observation Wheel",
    location: "The LINQ Promenade",
    whatItIs: "The world's largest observation wheel offering stunning views of the Strip.",
    mustSee: "A 360-degree view of Las Vegas, especially at night."
  },
  {
    name: "The Neon Museum (Neon Boneyard)",
    location: "Downtown Las Vegas",
    whatItIs: "An outdoor museum dedicated to preserving iconic neon signs from old Vegas hotels, casinos, and landmarks.",
    mustSee: "Classic signs like the 'Welcome to Fabulous Las Vegas' sign."
  },
  {
    name: "Red Rock Canyon National Conservation Area",
    location: "West of the Strip",
    whatItIs: "A scenic desert park known for its stunning red sandstone formations, hiking, and rock climbing.",
    mustSee: "The 13-mile scenic loop, Calico Hills, and scenic hiking trails."
  },
  {
    name: "Luxor Hotel Pyramid",
    location: "The Strip",
    whatItIs: "A massive Egyptian-themed hotel shaped like a pyramid.",
    mustSee: "The Sky Beam, which is the strongest beam of light in the world, shining from the top of the pyramid."
  },
  {
    name: "Paris Las Vegas",
    location: "The Strip",
    whatItIs: "A replica of the Eiffel Tower and Parisian streets.",
    mustSee: "The Eiffel Tower Experience and the Parisian-style café ambiance."
  },
  {
    name: "Caesars Palace",
    location: "The Strip",
    whatItIs: "A legendary resort and casino with Roman-inspired architecture.",
    mustSee: "The Forum Shops, the Bacchus Pool, and the Colosseum Theater (home to iconic performances)."
  },
  {
    name: "The Cosmopolitan of Las Vegas",
    location: "The Strip",
    whatItIs: "A luxury resort and casino with an artistic vibe and modern design.",
    mustSee: "The Chandelier Bar, unique dining experiences, and the rooftop pool with sweeping views."
  },
  {
    name: "The Mob Museum",
    location: "Downtown Las Vegas",
    whatItIs: "The National Museum of Organized Crime and Law Enforcement, dedicated to the history of the mob in the U.S.",
    mustSee: "Interactive exhibits and the crime lab experience."
  },
  {
    name: "The Hoover Dam",
    location: "30 miles southeast of Las Vegas",
    whatItIs: "One of the engineering marvels of the 20th century, straddling the border between Nevada and Arizona.",
    mustSee: "The Hoover Dam's impressive concrete structure and the Colorado River views."
  },
  {
    name: "Shark Reef Aquarium",
    location: "Mandalay Bay Resort & Casino",
    whatItIs: "A massive aquarium with over 2,000 animals, including sharks, rays, and sea turtles.",
    mustSee: "The 1.3 million-gallon exhibit with a walk-through tunnel."
  },
  {
    name: "Neonopolis",
    location: "Downtown Las Vegas",
    whatItIs: "A neon-lit shopping, dining, and entertainment complex.",
    mustSee: "Neon-lit signage and pop-culture attractions."
  },
  {
    name: "Pinball Hall of Fame",
    location: "East of the Strip",
    whatItIs: "A nostalgic museum showcasing a massive collection of pinball machines, some dating back to the 1950s.",
    mustSee: "Play the classic pinball machines for just a few quarters."
  },
  {
    name: "Stratosphere Tower",
    location: "Northern End of the Strip",
    whatItIs: "A 1,149-foot tower offering stunning views and thrilling rides.",
    mustSee: "The SkyJump (bungee jump off the tower), X-Scream, and Insanity rides."
  },
  {
    name: "Las Vegas Arts District",
    location: "Downtown Las Vegas",
    whatItIs: "A vibrant neighborhood with galleries, restaurants, and street art.",
    mustSee: "First Friday events, local art galleries, and unique bars."
  },
  {
    name: "The Palazzo",
    location: "The Strip",
    whatItIs: "A luxury hotel and casino with Italian-themed architecture.",
    mustSee: "The stunning opulence and elegant design, plus dining at celebrity chef restaurants."
  },
  {
    name: "Las Vegas Natural History Museum",
    location: "Just off the Strip",
    whatItIs: "A museum showcasing exhibits on prehistoric life, the human body, and ancient civilizations.",
    mustSee: "The dinosaur exhibits and the African wildlife gallery."
  },
  {
    name: "The Sphere Las Vegas",
    location: "East of the Strip, near The Venetian",
    whatItIs: "A massive, high-tech entertainment venue known for its wraparound LED exterior and fully immersive interior experiences combining visuals, sound, and motion.",
    mustSee: "The exterior LED displays at night and the immersive shows inside (especially the full-sensory films and concerts)."
  },
  {
    name: "AREA15",
    location: "Just west of the Strip (near I-15 & Spring Mountain Rd)",
    whatItIs: "An immersive, indoor entertainment complex packed with interactive art, VR, themed attractions, and food—more like a playground for the senses than a mall.",
    mustSee: "Meow Wolf's Omega Mart, virtual reality experiences, and rotating pop-up art installations."
  }
];

function getRandomRestaurant() {
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  window.open(restaurants[randomIndex], '_blank');
}

function getRandomNightclub() {
  const randomIndex = Math.floor(Math.random() * nightclubs.length);
  window.location.href = nightclubs[randomIndex];
}

function getRandomClub() {
  const randomIndex = Math.floor(Math.random() * clubs.length);
  window.open(clubs[randomIndex], '_blank');
}

function getRandomBarOrLounge() {
  const randomIndex = Math.floor(Math.random() * barsandlounges.length);
  window.location.href = barsandlounges[randomIndex];
}

function populateRandomRec() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * recs.length);
  } while (randomIndex === lastRecIndex);
  lastRecIndex = randomIndex;
  const rec = recs[randomIndex];
  document.getElementById('rec-title').textContent = rec.name;
  document.getElementById('rec-location').textContent = rec.location;
  document.getElementById('rec-what').textContent = rec.whatItIs;
  document.getElementById('rec-must-see').textContent = rec.mustSee;
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
      if(themeToggle) {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-pressed','true');
      }
    } else {
      root.removeAttribute('data-theme');
      if(themeToggle) {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-pressed','false');
      }
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

  if(themeToggle) {
    themeToggle.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // Simple form submit handler with client-side validation
  if(contactForm && formStatus) {
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
  }

  // Fill year
  if(yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
