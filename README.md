# Cyber Peace Corps Website

Welcome to the Cyber Peace Corps website repository! This React application serves as an online platform for the Cyber Peace Corps organization, dedicated to promoting cybersecurity awareness and education.

## Getting Started

To start the deployment server for this React app, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (Node package manager, usually comes with Node.js)

### Starting the Development Server

1. Open your terminal or command prompt.
2. Navigate to the project directory:
   ```bash
   cd src
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
   This command installs all necessary node modules required for the application to run.

4. Start the development server:
   ```bash
   npm start
   ```

The app will run on `http://localhost:3000`. Open this URL in your web browser to view the website.

## Project Structure

Here’s a breakdown of the key directories and files in this project:

```
cpc-website/
│
├── node_modules/           # Contains all npm packages installed
│
├── public/                 # Static assets and HTML templates
│   ├── favicon.ico         # Website icon
│   ├── index.html          # The main HTML file
│   ├── logo192.png         # Logo image (192x192)
│   ├── logo512.png         # Logo image (512x512)
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # Instructions for web crawlers
│
└── src/                    # Source code for the application
    ├── components/         # Reusable React components
    │   ├── About.js        # About component
    │   ├── Domains.js      # Domains component
    │   ├── Events.js       # Events component
    │   ├── Home.js         # Home component
    │   ├── Navbar.js       # Navigation bar component
    │   └── ui/             # UI components
    │       ├── Button.js   # Button component
    │       ├── Card.js     # Card component
    │       └── Modal.js    # Modal component
    │
    ├── App.css             # Global styles for the App
    ├── App.js              # Main application component
    ├── App.test.js         # Tests for the App component
    ├── index.css           # Global styles
    ├── index.js            # Main entry point for the React app
    ├── logo.svg            # SVG logo
    ├── reportWebVitals.js  # Performance metrics
    ├── setupTests.js       # Setup for testing
    ├── .gitignore           # Files and folders to be ignored by Git
    ├── package.json        # Project metadata and dependencies
    ├── package-lock.json   # Exact versions of npm dependencies
    ├── postcss.config.js    # Configuration for PostCSS
    └── tailwind.config.js   # Configuration for Tailwind CSS
```

## Important Warnings

To maintain the organization and functionality of the project, please adhere to the following guidelines:

1. **Folder Structure**: Always follow the specified folder structure. Place new components in the appropriate directories:
   - UI components should be placed in `src/components/ui/`.
   - General components should reside directly under `src/components/`.

2. **Naming Conventions**: Use clear and consistent naming conventions for files:
   - Use PascalCase for component filenames (`Button.js`, `Card.js`).
   - Ensure filenames reflect their purpose or function.

3. **Testing**: Write tests for newly added components in the corresponding format:
   - Place test files alongside their components, following the naming convention `ComponentName.test.js`.

4. **Documentation**: Update documentation, including this README, whenever you add or modify components to ensure clarity and ease of use.

5. **Code Standards**: Follow established code formatting and standards for readability and maintainability. Utilize tools like Prettier or ESLint as necessary.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please reach out through issues in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
