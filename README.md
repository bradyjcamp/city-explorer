# City Explorer

**Author**: Brady Camp
**Version**: 2.1.0

## Overview

This application is called City Explorer. It includes a search bar that allows the user to type in the name of a city and be displayed a variety of information pertaining to that city as well as a map. This will help users learn more about cities they wish to explore.

## Getting Started

The first step was to create a very simple whiteboard drawing of what the web request-response cycle(WRRC) would look like.
- [WRRC 1](/city-explorer-LocationIQ-API.jpg)
- [WRRC 2](/city-explorer-server-API.jpg)
- [WRRC 3](/city-explorer-wrrc.jpg)
- [WRRC 4](/WRRC.png)
- [WRRC 5](/WRRC-cache.png)

Then create a new react app from your local machine using the command `create react app city-explorer`.
After that, create a repo in GitHub and link them together following the instructions on GitHub.
This then imports all the files needed to get started.

## Architecture

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
- 02-24-2022 6:30pm EST - added components for form, map, city data, movies, weather, etc..
