# Express.js & EJS Multi-Page Website

A simple multi-page website built using **Node.js**, **Express.js**, and **EJS** for learning server-side rendering and routing.

## Features

* Home Page
* About Page
* Projects Page
* Contact Page
* EJS Templating
* Express Routing
* Reusable Layout Components
* Responsive Design

## Technologies Used

* Node.js
* Express.js
* EJS
* HTML5
* CSS3

## Pages

### Home

Displays the welcome section and introduction.

### About

Contains information about the website and developer.

### Projects

Showcases sample projects and practice work.

### Contact

Provides a contact form or contact information.

## Project Structure

```text
project/
│
├── views/
│   ├── home.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── contact.ejs
│   ├── partials/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│
├── public/
│   ├── css/
│   │   └── style.css
│
├── app.js
├── package.json
└── README.md
```

## Routes

```javascript
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
```

## Installation

```bash
npm install
npm start
```

Open your browser:

```text
http://localhost:3000
```

## Learning Objectives

* Learn Express.js Routing
* Understand EJS Templates
* Create Multi-Page Applications
* Use Partials for Reusable Components
* Organize Project Structure

## Author

Built as a practice project using Express.js and EJS.
