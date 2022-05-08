const texto = document.getElementById("extentWidth");
    texto.textContent = window.innerWidth;
    window.addEventListener("resize", () => {
        texto.textContent = window.innerWidth + "px";
    } );


const text2 = document.getElementById("extentEm");
    text2.textContent = window.innerWidth/16;
    window.addEventListener("resize", () => {
        text2.textContent = parseInt(window.innerWidth/16) + "em";
    } );
