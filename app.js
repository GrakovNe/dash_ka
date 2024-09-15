fetch('config.yaml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Configuration loading error: ' + response.statusText);
            }
            return response.text();
        })
        .then(yamlText => {
            const config = jsyaml.load(yamlText);

            applyStyles(config.styles);
            generateDashboard(config.applications);
            generateHeader(config.header);
        })
        .catch(error => {
            console.error(error);
            const dashboard = document.querySelector('.dashboard');
            dashboard.innerHTML = '<p>Unable to fetch App Configuration</p>';
        });


function applyStyles(styles) {
    const root = document.documentElement;

    for (const [key, value] of Object.entries(styles)) {
        const cssVariableName = `--${key.replace(/_/g, '-')}`;
        root.style.setProperty(cssVariableName, value);
    }
}

function generateHeader(header) {
    const headerElement = document.querySelector('header');

    document.title = header.title || 'Services Dashboard';
    headerElement.textContent = header.title || 'Configure me through yaml file';
}

    function generateDashboard(applications) {
        const dashboard = document.querySelector('.dashboard');

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

            tile.appendChild(img);
            tile.appendChild(h2);
            dashboard.appendChild(tile);
        });
    }