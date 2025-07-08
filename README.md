# Interactive World Map

An interactive, data-driven world map built with Angular that fetches real-time country data from the World Bank API.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [API](#api)  
- [Contributing](#contributing)  

---

## Project Overview

This project is an Angular-based web application that displays an interactive world map. Users can explore countries and retrieve relevant data such as population and other statistics using the World Bank API. It demonstrates usage of Angular services, HTTP client integration, and reactive programming with Observables.

---

## Features

- Interactive world map visualization  
- Country-specific data retrieval via World Bank API  
- Display of population and other country metrics  
- Modular and clean Angular service architecture  
- Responsive UI  

---

## Technologies Used

- Angular (v20.0.5)  
- TypeScript  
- RxJS  
- Angular HttpClientModule  
- World Bank API  

---

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)  
- npm or yarn  
- Angular CLI  

### Usage
Click on any country on the map to fetch and view detailed information.
Data is dynamically loaded via the WorldBankAPI Angular service.

### API
Uses the World Bank API to get:
Country info by country ID
Population data

Requests are made through Angular's HttpClient inside the WorldBankAPI service.

### Contributing
Contributions are welcome! Please submit issues or pull requests.