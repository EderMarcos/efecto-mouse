var Mouse = {
    /**
     * Atributos
     * */
    zone: document.querySelector('#mouse'),
    figures: document.querySelectorAll('#mouse figure'),
    mouseX: 0,
    mouseY: 0,
    horizontal: true,
    vertical: true,


    /**
     * Metodos
     * */
    init: function () {
        Mouse.zone.addEventListener('mousemove', Mouse.mouseMove);

        for (var i = 0; i < Mouse.figures.length; i++) {
            Mouse.figures[i].innerHTML = '<img src="images/plano0' + i + '.png">';
            Mouse.figures[i].style.zIndex = -i;
        }

        /**
         * Delay para que se terminen de cargar las imagenes
         * */
        setTimeout(function() {
            Mouse.zone.style.height = Mouse.figures[0].childNodes[0].height + "px";
        }, 100)
    },
    mouseMove: function (event) {
        Mouse.mouseX = event.offsetX;
        Mouse.mouseY = event.offsetY;

        if (Mouse.horizontal) {
            for (var i = 0; i < Mouse.figures.length; i++) {
                Mouse.figures[i].style.left = - (Mouse.mouseX / (i * 70 + 100)) + "%";
            }
        }

        if (Mouse.vertical) {
            for (var j = 0; j < Mouse.figures.length; j++) {
                Mouse.figures[j].style.top = Mouse.mouseY / (j * 110 + 100) + "%";
            }
        }
    }
};

Mouse.init();