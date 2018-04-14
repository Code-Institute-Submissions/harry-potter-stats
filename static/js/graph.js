queue()
    .defer(d3.json, "/HPStatistics/charStats")
    .await(makeGraphs);

function makeGraphs(error, HarryPotterJson) {
    if (error) {
        console.error("makeGraphs error on receiving dataset:", error.statusText);
        throw error;
    }

    //Clean Character Statistics data
    var character_stats = HarryPotterJson;


    //Create a Crossfilter instance
    var ndx = crossfilter(character_stats);

    //Define Dimensions
    var houseDim = ndx.dimension(function (d) {
        return d["hogwarts_house"];
    });
    var allegianceDim = ndx.dimension(function (d) {
        return d["allegiance"];
    });
    var deadAliveDim = ndx.dimension(function (d) {
        return d["dead_or_alive"];
    });
    var genderDim = ndx.dimension(function (d) {
        return d["gender"];
    });
    var isHumanDim = ndx.dimension(function (d) {
        return d["is_human"];
    });
    var BloodDim = ndx.dimension(function (d) {
        return d["blood_status"];
    });
    var nameDim = ndx.dimension(function (d) {
        return d["character_name"];
    });


    //Calculate metrics
    var numHouse = houseDim.group();
    var numAllegiance = allegianceDim.group();
    var numDeadAlive = deadAliveDim.group();
    var numGender = genderDim.group();
    var numHuman = isHumanDim.group();
    var numBlood = BloodDim.group();
    var total_characters = nameDim.groupAll().reduceCount(function (d) {
        return d["character_name"]
    });

    //defining the Chart names
    var HouseChart = dc.pieChart('#house-pie');
    var CharacterTotalChart = dc.numberDisplay('#hp-character-total');
    var isHumanChart = dc.barChart('#is-human-chart');
    var AllegianceChart = dc.rowChart('#character-allegiance');
    var GenderChart = dc.pieChart('#gender-chart');
    var deadAliveChart = dc.pieChart('#dead-alive-chart');
    var BloodLineChart = dc.rowChart('#blood-line-chart');

    //Styling of the Charts

    //This is the Styling of the Pie Chart that displays the Houses the characters were in.
    HouseChart
        .width(880)
        .height(400)
        .innerRadius(40)
        .transitionDuration(2000)
        .ordinalColors(['#941B08', '#caa011', '#071A80', '#154C07', '#42423e'])
        .dimension(houseDim)
        .group(numHouse)
        .minAngleForLabel(0);

    // This is the styling for the Number element that displays the total number based on the Chart selections
    CharacterTotalChart
        .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(total_characters)
        .formatNumber(d3.format(".3s"));

    //This is the bar chart that shows if the character is human or not.
    isHumanChart
        .width(440)
        .height(400)
        .dimension(isHumanDim)
        .group(numHuman)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal);

    // This is the Row Chart that shows the allegiance of each character.
    AllegianceChart
        .width(300)
        .height(210)
        .dimension(allegianceDim)
        .group(numAllegiance)
        .xAxis().ticks(8);

    // This is the pie chart that shows the genders of the characters in the database.
    GenderChart
        .width(300)
        .height(223)
        .innerRadius(40)
        .transitionDuration(2000)
        .dimension(genderDim)
        .group(numGender)
        .minAngleForLabel(0);

    //This is the Pie Chart that shows if the characters are dead or alive.
    deadAliveChart
        .width(300)
        .height(223)
        .innerRadius(40)
        .transitionDuration(2000)
        .dimension(deadAliveDim)
        .group(numDeadAlive)
        .minAngleForLabel(0);

    // This is the Row Chart that shows the bloodline of each character.
    BloodLineChart
        .width(300)
        .height(210)
        .dimension(BloodDim)
        .group(numBlood)
        .xAxis().ticks(8);


    // This renders all the graphs described above.
    dc.renderAll();
}