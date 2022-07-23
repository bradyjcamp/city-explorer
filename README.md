# City Explorer

**Author**: Brady Camp
**Version**: 1.0.3

## Overview

This application is called City Explorer. It includes a search bar that allows the user to type in the name of a city and be displayed a variety of information pertaining to that city as well as a map. This will help users learn more about cities they wish to explore.

## Getting Started

Click on attached [link](https://wonderful-liskov-30f90e.netlify.app/) for live site.

If you would like to install locally please clone Express Server to run locally - `git clone https://github.com/bradyjcamp/city-explorer-api.git`

Then install the server dependencies locally by entering `npm i`.

Then enter command `npm start` to start the server.

Next clone down the front end repository - `git clone https://github.com/bradyjcamp/city-explorer.git`

Enter command `npm i`.

Then enter command `npm start`.

## Architecture

This application was creating using React - `create react app city-explorer`

Whiteboard created using Miro.

This application includes JSX, React Bootstrap, Axios library, and Location IQ Geocoding API

## Change Log

- 02-21-2022 5:20pm EST - File structure to app complete for initial structure
- 02-21-2022 5:26pm EST - Imported React Bootstrap and Axios
- 02-21-2022 5:56pm EST - API Key added
- 02-21-2022 9:10pm EST - Added form that displays location info based on user search
- 02-21-2022 10:43pm EST - Added map image
- 02-21-2022 11:12pm EST - Added error code and styling
- 02-22-2022 6:30pm EST - created getWeather function
- 02-22-2022 9:30pm EST - linked data from server to display weather forecast
- 02-23-2022 6:30pm EST - small bug fix to forecast rendering
- 02-23-2022 7:30pm EST - edits to parameters to take in lat and lon and new weather data
- 02-23-2022 8:30pm EST - rendered movie data from movie database
- 02-24-2022 6:30pm EST - added components for form, map, city data, movies, weather
