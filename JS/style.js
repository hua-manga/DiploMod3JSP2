function count_up(obj) {
    document.getElementById('count1').innerHTML = obj.value.length;
}

function count_down(obj) {
    var element = document.getElementById('count2');
     
    element.innerHTML = 90 - obj.value.length;
     
    if (90 - obj.value.length < 0) {
        element.style.color = 'red';
     
    } else {
        element.style.color = 'grey';
    }    
}