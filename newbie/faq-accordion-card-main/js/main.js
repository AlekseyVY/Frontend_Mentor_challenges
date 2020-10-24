let elements = document.getElementsByClassName('show')

for(let x = 0; x < elements.length; x++) {
    let string_construct = "hide_" + (x + 1);
    elements[x].onclick = function() {
        if (document.getElementById(string_construct).style.display === 'none') {
            document.getElementById(string_construct).style.display = 'block'
            document.getElementById('' + (x + 1)).style.fontWeight = '700'
        } else {
            document.getElementById(string_construct).style.display = 'none'
            document.getElementById('' + (x + 1)).style.fontWeight = '400'
        }
    }
}