
# DashKa

![image](https://github.com/user-attachments/assets/6680fb09-a076-47a2-a987-9283936b505b)

A simple and customizable dashboard to gather all your home services into one user interface for easy navigation.

## Features

-   Customizable Interface: Easily add or remove services through a simple YAML configuration.
-   Responsive Design: Optimized for all screen sizes.
-   Easy Setup: Minimal dependencies and straightforward installation.
-   Theming Support: Customize colors, fonts, and more via the config file.


## Getting Started

### Prerequisites

-   A web server to host static files (e.g., Nginx, Apache, or a simple Python HTTP server).
-   Basic understanding of HTML, CSS, and JavaScript (optional, for further customization).

### Installation

1. Clone or Download the Repository

```
git clone https://github.com/yourusername/services-dashboard.git
```

2. Navigate to the Project Directory

```
cd services-dashboard
```
3. Start the Web Server

```  
python3 -m http.server 8000
```

## Configuration

All configurations are managed through the config.yaml file located in the root directory.

### Configuring Applications

Under the applications section in config.yaml, list all the services you want to display on your dashboard.

Each application entry requires:
-   name: The display name of the application.

-   url: The link to the application.

-   icon: Path or URL to the application's icon.

-   accent_color: (Optional) A hex code for the tile's accent color.


Example:
```
applications:
  - name: Plex Media Server
    url: https://plex.yourdomain.com
    icon: resources/plex.png
    accent_color: "#e5a00d"
  - name: Nextcloud
    url: https://nextcloud.yourdomain.com
    icon: resources/nextcloud.png
    accent_color: "#0082c9"
 ```

### Customizing Styles

Modify the dashboard's appearance via the styles section in config.yaml.

Available style options:

-   background_color
-   text_color
-   header_background
-   header_text_color
-   tile_background
-   tile_border_color
-   tile_hover_background
-   shadow_color
-   tile_shadow
-   tile_hover_shadow
-   border_radius
-   transition_duration
-   font_family


Example:
```
styles:
  background_color: "#f0f2f5"
  text_color: "#333"
  header_background: "#ff6f3f"
  header_text_color: "#fff"
  tile_background: "#fff"
  tile_border_color: "#ddd"
  tile_hover_background: "#f9fafb"
  shadow_color: "rgba(0, 0, 0, 0.1)"
  tile_shadow: "0 4px 6px var(--shadow-color)"
  tile_hover_shadow: "0 8px 12px var(--shadow-color)"
  border_radius: "12px"
  transition_duration: "0.3s"
  font_family: "'Roboto', sans-serif"
```
Note: Ensure all resource paths (like icons) are correct relative to the index.html file.

## Contact

If you have any questions, suggestions, or need assistance, feel free to reach out:

-   Email: grakovne@gmail.com
-   Telegram: @maxgrakov
* * *
