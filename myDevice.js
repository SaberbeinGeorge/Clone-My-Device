const texto = document.getElementById("extentWidth");
    texto.textContent = window.innerWidth + "px";
    window.addEventListener("resize", () => {
        texto.textContent = window.innerWidth + "px";
    } );


const text2 = document.getElementById("extentEm");
    text2.textContent = parseInt(window.innerWidth/16) + "em";
    window.addEventListener("resize", () => {
        text2.textContent = parseInt(window.innerWidth/16) + "em";
    } );
