function myFunction() {
document.getElementById("second-level").classList.toggle("show");
document.getElementById("second-level-arrow").classList.toggle("show3");
}

window.onclick = function(event) {
    if (!event.target.matches('.link')) {
        var dropdowns = document.getElementsByClassName("second-level__items");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            if (openDropdown.classList.contains('show3')) {
                openDropdown.classList.remove('show3');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("third-level").classList.toggle("show2");
    document.getElementById("third-level-arrow").classList.toggle("show4");
    }
    
window.onclick = function(event) {
    if (!event.target.matches('.link2')) {
        var dropdowns = document.getElementsByClassName("third-level__items");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show2')) {
                openDropdown.classList.remove('show2');
            }
            if (openDropdown.classList.contains('show4')) {
                openDropdown.classList.remove('show4');
            }
        }
    }
}
