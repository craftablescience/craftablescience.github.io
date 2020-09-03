// This function taken from "https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php"
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AGE = calculate_age(new Date(2003, 5, 14));

let nodes = document.getElementsByClassName("var-changer");

nodes.forEach(function(node) {
    node.innerHTML = node.innerHTML.replace("AGE_VAR", parseInt(AGE));
});
