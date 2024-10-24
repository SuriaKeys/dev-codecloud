document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = 0;
        splashScreen.style.transition = 'opacity 0.5s ease'; 
        setTimeout(() => {
            splashScreen.style.display = 'none'; 
            console.log("Splash screen hidden");
        }, 500); 
    }, 1600);
});
