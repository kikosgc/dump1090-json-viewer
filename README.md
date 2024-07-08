# ADS-B Data Dashboard

## Project Description

The ADS-B Data Dashboard is a web-based interface designed to visualize ADS-B data collected from an aircraft tracking system. The dashboard provides a modern, fluid, and responsive design that displays various metrics related to ADS-B data processing. The main technologies used are HTML, CSS, and JavaScript, with Chart.js for dynamic graph rendering.

### Features

- **Real-time Data Visualization**: The dashboard fetches live data from a specified endpoint and updates the charts accordingly.
- **Responsive Design**: The layout adjusts seamlessly across different devices and screen sizes.
- **Multiple Metrics**: The dashboard presents several key metrics including samples processed, CPR airborne, CPU usage for demodulation, tracks, and messages over various time periods (last 1 minute, last 5 minutes, last 15 minutes, and total).
- **Clean and Modern Interface**: The design emphasizes simplicity and usability, making it easy to understand the data at a glance.

### Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Offers a clean, modern style to the dashboard, ensuring a pleasant user experience.
- **JavaScript**: Handles data fetching and dynamic content generation.
- **Chart.js**: A lightweight charting library used for creating responsive and interactive graphs.

### Installation

No additional installations are required on your PC. The project leverages CDN links for Chart.js, ensuring minimal setup. Simply host the HTML, CSS, and JavaScript files on your web server, and ensure the data endpoint is correctly configured.

### Usage

1. **Data Endpoint**: Ensure the data is available at `http://192.168.1.192/dump1090/data/stats.json`.
2. **Host the Files**: Place the `index.html`, `styles.css`, and `script.js` files on your web server.
3. **Open in Browser**: Navigate to the hosted `index.html` file in a web browser to view the dashboard.

### File Overview

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: The CSS file that styles the web page, ensuring a modern and responsive design.
- `script.js`: The JavaScript file that handles data fetching, processing, and chart creation.

### Sample Data

```json
{
  "latest": {
    ...
  },
  "last1min": {
    ...
  },
  "last5min": {
    ...
  },
  "last15min": {
    ...
  },
  "total": {
    ...
  }
}
```
### MADE WITH HELP OF CHATGPT
