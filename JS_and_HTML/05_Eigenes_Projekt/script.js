
var slider = document.getElementById("demo");
var output = document.getElementById("myrange");
output.innerHTML = slider.value; 

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
