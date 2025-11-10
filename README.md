# Express + Handlebars Website

A modern, responsive website built with Node.js, Express, and Handlebars (HBS).  
Includes Bootstrap-based design, reusable partials, and custom CSS effects for a sleek user experience.

---

## Features

- Express.js server with dynamic Handlebars templating  
- Organized folder structure (MVC-style layout)  
- Responsive Bootstrap 5 design with custom animations  
- Reusable partials (navbar, footer, etc.)  
- Custom 404 error page  
- Static assets served from the /public directory  
- CSS transitions, hover effects, and smooth animations  

---

## Project Structure

project/
├── public/
│ ├── style.css
│ ├── Logo.png
│ ├── Slide1.jpg
│ ├── Slide2.jpg
│ ├── Slide3.jpg
│ └── Growth1.png
│
├── src/
│ ├── index.js
│ └── templates/
│ ├── partials/
│ │ └── navbar.hbs
│ └── views/
│ ├── index.hbs
│ └── 404.hbs
│
└── package.json


---

## Technologies Used

| Technology | Purpose |
|-------------|----------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| Handlebars (HBS) | Templating engine |
| Bootstrap 5 | Frontend UI styling |
| CSS3 | Custom styling and animations |

---

## Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/Abhikorekar/express-hbs-website.git
2. Install dependencies
bash
Copy code
cd express-hbs-website
npm install
3. Start the server
bash
Copy code
npm start
4. View in browser
Open the following URL in your browser:
http://localhost:8000

Future Improvements
Add dark/light mode toggle

Integrate APIs (for example, OpenWeather or NewsAPI)

Add form validation and database integration

Developed By
Abhishek Korekar
Made with ❤️ using Node.js and Express.
