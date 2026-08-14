/* =================================
   CONTADOR
================================= */

const fechaCumple = new Date("2026-08-15T00:00:00");


function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        fechaCumple - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";

        return;
    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferencia /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferencia / 1000) % 60
        );


    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;
}


actualizarContador();

setInterval(
    actualizarContador,
    1000
);


/* =================================
   ABRIR SOBRE
================================= */

function abrirSobre() {

    const sobre =
        document.getElementById("sobre");


    sobre.classList.toggle("abierto");

}


/* =================================
   ABRIR SORPRESA
================================= */

function abrirSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");


    sorpresa.classList.add("activa");


    lanzarConfeti();

    lanzarCorazones();

}


/* =================================
   CERRAR SORPRESA
================================= */

function cerrarSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");


    sorpresa.classList.remove("activa");

}


/* =================================
   CONFETI
================================= */

function lanzarConfeti() {

    for (let i = 0; i < 80; i++) {

        const confeti =
            document.createElement("div");


        confeti.style.position = "fixed";

        confeti.style.width = "8px";

        confeti.style.height = "15px";

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.top = "-20px";

        confeti.style.zIndex = "200";

        confeti.style.pointerEvents =
            "none";


        const colores = [
            "#ff477e",
            "#ff8fab",
            "#ffd166",
            "#ffffff",
            "#c77dff"
        ];


        confeti.style.background =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];


        confeti.style.animation =
            `caer ${Math.random() * 3 + 2}s linear forwards`;


        document.body.appendChild(confeti);


        setTimeout(() => {

            confeti.remove();

        }, 5500);

    }

}


/* =================================
   CORAZONES
================================= */

function lanzarCorazones() {

    const corazones = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💞"
    ];


    for (let i = 0; i < 20; i++) {

        const corazon =
            document.createElement("div");


        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() *
                    corazones.length
                )
            ];


        corazon.style.position =
            "fixed";


        corazon.style.left =
            Math.random() * 100 + "vw";


        corazon.style.bottom =
            "-40px";


        corazon.style.fontSize =
            Math.random() * 20 + 20 + "px";


        corazon.style.zIndex =
            "150";


        corazon.style.pointerEvents =
            "none";


        corazon.style.animation =
            `subirCorazon ${Math.random() * 2 + 3}s linear forwards`;


        document.body.appendChild(
            corazon
        );


        setTimeout(() => {

            corazon.remove();

        }, 5500);

    }

}


/* =================================
   ANIMACIONES DEL CONFETI
================================= */

const estilosAnimacion =
document.createElement("style");


estilosAnimacion.innerHTML = `

@keyframes caer {

    from {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;
    }

    to {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: .8;
    }
}


@keyframes subirCorazon {

    from {

        transform:
            translateY(0)
            scale(.5);

        opacity: 0;
    }

    15% {

        opacity: 1;
    }

    to {

        transform:
            translateY(-110vh)
            scale(1.2)
            rotate(20deg);

        opacity: 0;
    }
}

`;


document.head.appendChild(
    estilosAnimacion
);

/* =================================
   ❤️ TE AMO EN DIFERENTES IDIOMAS
================================= */

function teAmoIdiomas() {

    const frases = [
        "Te amo ❤️",
        "I love you ❤️",
        "Je t'aime ❤️",
        "Ti amo ❤️",
        "Ich liebe dich ❤️",
        "Eu te amo ❤️",
        "愛してる ❤️",
        "사랑해 ❤️",
        "我爱你 ❤️",
        "Я тебя люблю ❤️",
        "Seni seviyorum ❤️",
        "Ik hou van jou ❤️",
        "Jag älskar dig ❤️",
        "Jeg elsker deg ❤️",
        "Jeg elsker dig ❤️",
        "Είμαι ερωτευμένος μαζί σου ❤️",
        "मैं तुमसे प्यार करता हूँ ❤️",
        "ฉันรักคุณ ❤️",
        "Mahal kita ❤️",
        "Aku cinta kamu ❤️"
    ];


    for (let i = 0; i < 45; i++) {

        const texto =
            document.createElement("div");

        texto.classList.add("te-amo-volando");

        texto.textContent =
            frases[
                Math.floor(
                    Math.random() *
                    frases.length
                )
            ];


        texto.style.left =
            Math.random() * 90 + 5 + "vw";


        texto.style.top =
            Math.random() * 85 + 5 + "vh";


        texto.style.fontSize =
            Math.random() * 15 + 14 + "px";


        texto.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(texto);


        setTimeout(() => {

            texto.remove();

        }, 5000);

    }
}