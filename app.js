async function main() {
    try {
        const response = await fetch('config.yaml');

        if (!response.ok) {
            throw new Error(`Configuration loading error: ${response.statusText}`);
        }

        const yamlText = await response.text();
        const config = jsyaml.load(yamlText);

        // Apply the configuration settings
        applyStyles(config.styles);
        generateDashboard(config.applications);
        generateHeader(config.header);

    } catch (error) {
        console.error(error);

        // Display an error message in case of failure
        const dashboard = document.querySelector('.dashboard');
        dashboard.innerHTML = '<p>Unable to fetch App Configuration</p>';
    }
}

/**
 * Apply styles from the configuration to the root element using CSS variables
 * @param {Object} styles - An object where keys represent style names and values represent style values
 */
function applyStyles(styles) {
    const root = document.documentElement;

    // Convert each key to a CSS variable format and set the value
    Object.entries(styles).forEach(([key, value]) => {
        const cssVariableName = `--${key.replace(/_/g, '-')}`;
        root.style.setProperty(cssVariableName, value);
    });
}

/**
 * Generate the header section based on the configuration
 * @param {Object} header - An object containing the header configuration (e.g., title)
 */
function generateHeader(header) {
    const headerElement = document.querySelector('header');

    // Set the document title and the header text, using a fallback if not provided
    document.title = header.title || 'Services Dashboard';
    headerElement.textContent = header.title || 'Configure me through the YAML file';
}

/**
 * Generate the dashboard by creating tiles for each application in the configuration
 * @param {Array} applications - A list of application objects with attributes like name, url, icon, etc.
 */
function generateDashboard(applications) {
    const dashboard = document.querySelector('.dashboard');
    dashboard.innerHTML = ''; // Clear any existing content

    // Create a tile for each application in the list
    applications.forEach(app => {
        const tile = document.createElement('a');
        tile.href = app.url;
        tile.className = 'tile';
        tile.style.setProperty('--accent-color', app.accent_color);

        const img = document.createElement('img');
        img.src = app.icon;
        img.alt = `${app.name} Icon`;
        img.className = 'icon';

        const h2 = document.createElement('h2');
        h2.textContent = app.name;

        // Append the image and name to the tile, then append the tile to the dashboard
        tile.appendChild(img);
        tile.appendChild(h2);
        dashboard.appendChild(tile);
    });
}

main();
