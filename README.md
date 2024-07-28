
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
│
├── css/
│ └── style.css # Compiled CSS from SCSS
├── scss/
│ ├── _fonts.scss # Font styles and imports
│ ├── _main.scss # Main website styles
│ ├── _mixin.scss # SCSS mixins
│ ├── _reset.scss # Reset/normalize styles
│ ├── _variables.scss # SCSS variables
│ └── global.scss # Global style imports
├── img/ # Images and icons used in the website
├── js/
│ └── script.js # JavaScript for interactive features
├── index.html # Main HTML file
└── README.md # This file
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
