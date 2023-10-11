# Weather App

![ss_weather_app](https://github.com/kobrak1/weather-app-react/assets/114083611/d5071285-8176-449c-aff7-986e2535a6e7)

This is a simple React weather app that allows users to check the weather conditions for a specific location. It displays the temperature, weather icon, feels-like temperature, humidity, and wind speed.

## Features

- Real-time weather data from the OpenWeatherMap API.
- Dynamic background color and icon based on weather conditions.

## Technologies Used

- React
- CSS3
- Axios (for making HTTP requests)
- OpenWeatherMap API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create an OpenWeatherMap API key:

   - Go to the [OpenWeatherMap API](https://openweathermap.org/api) website and sign up for a free account.
   - Generate an API key.
   - Update the `VITE_API_KEY` in your `.env` file with your API key.

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the app.

3. Enter the name of a location in the input field and press "Enter" to fetch the weather data for that location.

## Styling

The app applies dynamic styling based on the weather conditions:

- `rain` for rainy weather
- `clear` for clear weather
- `snow` for snowy weather
- `drizzle` for drizzly weather
- `thunderstorm` for thunderstorm weather
- `clouds` for cloudy weather
- `haze` for hazy weather
- `default` for unknown conditions

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to OpenWeatherMap for providing weather data.
- This project was created as a learning exercise with React.
