function closeMenu() {
    const toggle=document.querySelector('.toggle');
    const navigation=document.querySelector('.menu');
    toggle.classList.toggle('active');
    navigation.classList.toggle("active2");
}
    // change color 
    function changeColor(color){
        const main=document.querySelector('.circle');
                main.style.background=color;
    }
    //  darkmode js
    var checkbox=document.querySelector('input[name=mode]');
    checkbox.addEventListener('click', function(){
        if(this.checked){
            trans()
            document.documentElement.setAttribute('data-theme', 'dark-theme');
            document.documentElement.setAttribute('data-theme', 'light-theme');
        }
    })
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 500);
    }

    // countdow time 
    var x = document.getElementById('clock');
    function realtimeClock() {
        var rtClock = new Date();

        var hours = rtClock.getHours();
        var minutes = rtClock.getMinutes();
        var seconds = rtClock.getSeconds();
        var amPm = (hours < 12) ? "AM" : "PM";
        hours = (hours > 12) ? hours - 12 : hours;
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        x.innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
        var t = setTimeout(realtimeClock, 500);
    }