$(document).ready(function() {
    $(".nav_menu").click(function() {
        $('#nav_list').toggleClass("open")
    });
});


function changeAirPollution() {
    document.getElementById('air_pollution').innerHTML = document.getElementById('districts').value
}