
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
├── css/ # CSS files
│ ├── style.css # Main stylesheet compiled from SCSS
│ └── style.css.map # Source map for debugging CSS
├── fonts/ # Collection of font files
├── img/ # Images and icons
├── js/
│ └── script.js # Scripts for interactive elements
├── lang/
│ ├── en.json # English text for site content
│ └── ka.json # Georgian text for site content
├── node_modules/ # Dependencies (not included in Git)
├── scss/ # SCSS files
│ ├── _burger-menu.scss # Styles for the burger menu
│ ├── _fonts.scss # Font definitions and imports
│ ├── _main.scss # Main styles for the site
│ ├── _mixin.scss # SCSS mixins for reusable code
│ ├── _reset.scss # Reset styles to normalize browser default styles
│ ├── _responsive.scss # Responsive design adjustments
│ ├── _variables.scss # SCSS variables for consistent styling
│ └── global.scss # Import of all global styles
├── index.html # Entry point HTML file
├── postcss.config.js # Configuration for processing CSS
├── package.json # Project metadata and dependencies
├── package-lock.json # Exact tree of installed packages
└── README.md # Documentation of the project
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
