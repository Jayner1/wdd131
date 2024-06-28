document.addEventListener("DOMContentLoaded", function() {
   
    const currentYear = new Date().getFullYear();

    const copyrightYearSpan = document.getElementById("copyrightYear");
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = currentYear;
    }

    const lastModifiedDate = new Date(document.lastModified);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedLastModified = lastModifiedDate.toLocaleDateString('en-US', options);

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${formattedLastModified}`;
    }
});

    function calculateWindChill(temperature, windSpeed) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }

    document.addEventListener("DOMContentLoaded", function() {
        var temperature = 23; // static temperature value in Celsius
        var windSpeed = 16; // static wind speed value in km/h

        var windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("wind-chill").textContent = `Wind Chill: ${windChill.toFixed(2)}° C`;
    });