
    function showMenu() {
        document.querySelector('.menu').classList.add('visible');
    }

    function hideMenu() {
        document.querySelector('.menu').classList.remove('visible');
    }

    document.querySelector('.burger').addEventListener('click', showMenu);
    document.querySelector('.burger').addEventListener('touchstart', showMenu);

    document.querySelector('.close').addEventListener('click', hideMenu);
    document.querySelector('.close').addEventListener('touchstart', hideMenu);
