
# TBC Academy React Acceleration Task
## Table of Contents

```markdown
- Project Structure 
- Technologies Used 
- Getting Started 
  - Prerequisites 
  - Installation
  - Running the Project 
```
## Project Structure
The project follows a structured hierarchy to ensure maintainability and scalability:
```
tbcconcept/
├── css/                        # Compiled CSS files
│   ├── style.css               # Main stylesheet
│   └── style.css.map           # CSS source maps for debugging
├── fonts/                      # Custom and web fonts
├── img/                        # Images and icons used across the site
├── js/                         # JavaScript files
│   └── script.js               # Main JavaScript functionality
├── lang/                       # Language files for site localization
│   ├── en.json                 # English language resources
│   └── ka.json                 # Georgian language resources
├── node_modules/               # Node modules (not tracked)
├── scss/                       # SCSS sources
│   ├── _burger-menu.scss       # Burger menu styles
│   ├── _fonts.scss             # Font styles
│   ├── _main.scss              # Core styling
│   ├── _mixin.scss             # Reusable mixins
│   ├── _reset.scss             # CSS reset
│   ├── _responsive.scss        # Responsive design styles
│   ├── _variables.scss         # SCSS variables
│   └── global.scss             # Global style imports
├── index.html                  # Main HTML file
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Locked version dependencies
└── README.md                   # This file

```

## Technologies Used

- **HTML5**: Structuring the web page.
- **SCSS**: Advanced styling with features like variables, mixins, and nested rules.
- **JavaScript**: Enhancing interactivity and user experience.
- **Node.js**: Utilizing npm for managing dependencies.

## Getting Started

### Prerequisites

Before running the project, you must have Node.js and npm installed on your computer. You can check their installations using the following commands:

```bash
node --version
npm --version
```

### Installation

To set up the project environment, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/samolae/tbcconcept.git
   cd tbcconcept
   ```

2. Install required packages:
   ```bash
   npm install
   ```

3. Compile SCSS to CSS:
   ```bash
   npm run watch
   ```

### Running the Project

Open `index.html` in your web browser to view the project. Use the following command to keep SCSS watching for changes and automatically compile:

```bash
npm run watch
```
