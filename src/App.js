import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import weatherBackground from "./assets/weather_bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: `url(${weatherBackground})`,
    backgroundSize: "cover",
    padding: theme.spacing(4),
    color: "#FFFFFF",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  cityInput: {
    flex: 1,
    marginRight: theme.spacing(2),
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: theme.spacing(1),
    height: "100%",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  searchButton: {
    minWidth: 120,
    background: "#1E88E5",
    color: "#FFFFFF",
    borderRadius: theme.spacing(1),
    height: "100%",
  },
  weatherContainer: {
    marginTop: theme.spacing(4),
    textAlign: "center",
    color: "#FBCEB1",
  },
  temperature: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: "#FBCEB1",
  },
  description: {
    fontSize: "24px",
  },
  cityText: {
    marginTop: 16,
    fontFamily: "Arial, sans-serif",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#FBCEB1",
    textTransform: "uppercase",
  },
}));

function App() {
  const apiKey = "443e3be54b3662d424e848a16479f65f";
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const classes = useStyles();

  const getWeather = () => {
    if (city !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter the city"
          className={classes.cityInput}
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          className={classes.searchButton}
          onClick={getWeather}
        >
          Search
        </Button>
      </div>

      {Object.keys(weatherData).length === 0 || !weatherData.main ? (
        <div>
          <Typography variant="h6" className={classes.cityText}>
            Enter a city
          </Typography>
        </div>
      ) : (
        <div className={classes.weatherContainer}>
          <Typography variant="h4">{weatherData.name}</Typography>
          <Typography variant="h1" className={classes.temperature}>
            {Math.round(weatherData.main.temp)}°F
          </Typography>
          <Typography variant="h6" className={classes.description}>
            {weatherData.weather[0].description}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default App;
