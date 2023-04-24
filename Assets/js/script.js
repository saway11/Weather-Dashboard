var cityInputEl = document.getElementById("city-input");
var cityFormEl = document.getElementById("city-form");
var searchEl = document.getElementById("search-button");
var searchHistoryEl = document.getElementById("search-history")
var currentContainerEl = document.getElementById("current-container")
var forecastContainerEl = document.getElementById("forecast-container")

var APIkey = "1af8ca56afa425104e46913689c7da68c";
var cities = []

var loadCities = function() {
    var citiesLoaded = localStorage.getItem("cities")
    if(!citiesLoaded) {
        return false;
    }
}
