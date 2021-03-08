function closeMenu() {
    const toggle=document.querySelector('.toggle');
    const navigation=document.querySelector('.navigation');
    toggle.classList.toggle('active');
    navigation.classList.toggle("active2");
}

    function changeColor(color){
        const main=document.querySelector('.circle');
                main.style.background=color;
    }

    var checkbox = document.querySelector('input[name=mode]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'darktheme')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'lighttheme')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }


