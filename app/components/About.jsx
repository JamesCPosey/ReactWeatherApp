var React = require('react');

var About = (props) => {
  return (
    <div className="text-align: center">
    <div className="display: inline-block">
      <h1>About</h1>
      <p>A React weather application built by James C Posey Jr.</p>
      <p>Technologies used:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a> - The JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - The source API used to search for weather data by city name.
        </li>

      </ol>
      
      <p>Source code: <a href="https://github.com/JamesCPosey/ReactWeatherApp">JamesCPosey's GitHub: React Weather App</a></p>
    </div>
    </div>
  )
};


module.exports = About;
