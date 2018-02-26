#Harry Potter Statistics Project - Code Academy Stream 2

You can view the project here: 

###Purpose and need of project

The project itself shows a variety of statistics related to the very popular book series 'Harry Potter'.
The purpose of the project is to show the user how many characters mentioned throughout the series meet 
the requirements set by the user. The user can easily find out, for example, how many characters were a
part of the 'Slytherin' House and were female. The application itself has a counter at the top that easily
displays the total amount of people that meet the specified criteria and the charts adjust as the user clicks
on them to portrait more data about the group of people shown by the number in the counter.

###Database Information

The database consists of information I collected off the following source:
*https://en.wikipedia.org/wiki/List_of_Harry_Potter_characters
*http://harrypotter.wikia.com/wiki/Main_Page

The database is run through the Heroku application add on called mLab. The database was formatted in a csv file and
imported into a MongoDB database. 

###Technologies Used
Technology Name | Description
------------ | -------------
[Flask](http://flask.pocoo.org/) | Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
[MongoDB](https://www.mongodb.com/) | Document-oriented (NoSQL) database using JSON-like documents.
[dc.js](https://dc-js.github.io/dc.js/) | dc.js is a javascript charting library with native crossfilter support, allowing highly efficient exploration on large multi-dimensional datasets (inspired by crossfilter's demo). It leverages d3 to render charts in CSS-friendly SVG format. Charts rendered using dc.js are data driven and reactive and therefore provide instant feedback to user interaction.
[d3.js](https://d3js.org/) | D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
[crossfilter.js](http://square.github.io/crossfilter/) | Crossfilter is a JavaScript library for exploring large multivariate datasets in the browser. 
[intro.js](https://introjs.com/) | Intro.js is an open source vanilla Javascript / CSS library to add step-by-step introduction or hints.
[Dashboard by Keen IO](https://keen.github.io/dashboards/)|  Responsive dashboard templates for Bootstrap.
[queue.js](https://d3js.org/) |  Lightweight asynchronous helper library used to load the character data from the database.
[Bootstrap](https://getbootstrap.com/) | Bootstrap is a framework that allows the user to easily create responsive websites based around a grid-like system.


### Project Detailed explanation

TBA

### Deploying Application

The application is deployed using Heroku on their free plan. The application uses the Heroku add on called mLab for the database
hosting.


### External Influences

The general design of the dashboard was influenced by the dashboard example given during the course. The html skeleton 
was modified to fit my charts and the layout I required.

The font used in the chart headers is called [Parry Hotter](http://www.1001fonts.com/parry-hotter-font.html) and is free
to use for non-commercial projects.

