var trainendpoint = "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key="
var busendpoint = "http://ctabustracker.com/bustime/api/v2/gettime?key="
var weatherendpoint = "http://api.openweathermap.org/data/2.5/weather?"
var trainkey = "a84a005d40d24debb86f294dad996767" 
var buskey = "w4q9rYU3KH9nwjLszi2U2pBhc"
var weatherkey = "33b276c7eacaa52ce3cb19f57f583ae1"
//Initialize all the material components
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//Grab all the data from the CTA Database ONCE except for arrival times
//Check on navbar click, go to specific screen
import {MDCTopAppBar} from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
//Display what is needed(endpoints should grab data programatically here/For Some Things)
//
//Home Screen: About the Application
//

//
//Weather Screen(May be moved later)
//Grab data from openweatherapi
//Display neatly using cards
//

//
//Recents and Favorites:
//Store favorite stations for easier viewing
//Store a list of recents up to 25 times ago
//

//
//Stations Screen:
//additional clicking/tapping on things would lead to more content
//Initial: List of all routes and train lines
// First Click: Show Direction(Can be cached for trains, not so much so for buses)
//  Second Click: Show stations/stops
//   Third Click: Show Time to Arrival(ONLY GRAB THIS AT THIS SCREEN)
//   Only once you hit time to arrival, Favorites Functionality will exist on the top right
// Cache the result in history for the recent screen
//
