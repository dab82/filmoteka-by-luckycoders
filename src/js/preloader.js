document.body.onload = function () {
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
}