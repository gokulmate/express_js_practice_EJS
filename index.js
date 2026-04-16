const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

// home data
app.get('/', (req, res) => {
  res.render('index', {
    name: 'Gokul',
    pageTitle: 'Portfolio',
    fullName: 'Gokul Mate',
    greeting: 'Hello',
    tagline: 'Frontend Developer | Building Modern Websites',
    primaryBtn: 'View Projects',
    secondaryBtn: 'Hire Me',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/project", label: "Projects" },
      { href: "/contact", label: "Contact" }
    ]
  });
});

// about data
app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Gokul',
    pageTitle: 'About',
    heading: 'About Me',
    paragraphs: [
      'I am a web developer with a strong interest in building simple and responsive websites.',
      'I enjoy creating user-friendly interfaces using HTML, CSS, JavaScript and React.'
    ],
    navLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/project', label: 'Projects' },
      { href: '/contact', label: 'Contact' }
    ]
  });
});

// project data
app.get("/project", (req, res) => {
  res.render("project", {
    pageTitle: "Projects",
    name: "Gokul",
    heading: "My Projects",
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/project", label: "Projects" },
      { href: "/contact", label: "Contact" }
    ],
    projects: [
      { title: "Portfolio Website", tech: "HTML CSS JS" },
      { title: "Tourism Website", tech: "Bootstrap project" },
      { title: "E-commerce App", tech: "React + Tailwind" }
    ]
  });
});

// contact data
app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact",
    name: "Gokul",
    heading: "Contact Me",
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/project", label: "Projects" },
      { href: "/contact", label: "Contact" }
    ],
    contacts: [
      { label: "Email", value: "gokul@example.com" },
      { label: "Phone", value: "+91 9876543210" },
      { label: "Location", value: "Pune, India" }
    ],
    paragraph: [
      'I am a web developer with a strong interest in building simple and responsive websites.',
      'I enjoy creating user-friendly interfaces using HTML, CSS, JavaScript and React.'
    ],
  });
});

const PORT = 3000;
const host = '127.0.0.1';

app.listen(PORT, host, () => {
  console.log(`server is running on http://${host}:${PORT}`);
});