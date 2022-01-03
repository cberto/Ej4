$(document).ready(function() {
    $("#btn1").click(function() {
        $.get("data.txt", function (data) {
            alert("Metodos Ajax: ");
            document.getElementById("texto1").value = "Cargando con Jquery: " + data;
            });
       });
       $("#btn2").click(function () {
        $.post("test.ashx" ,
                 {
                     param1: $("[name = nombre]").val(),
                     param2: $("[name = apellido]").val()
                  },
                    function (data) {
                        alert("Utilizando metodos Ajax; ");
                        crearContainer(data);
                        });
        });
    });
    function crearContainer (texto) {
        var t = document.createTextNode(texto);
        var h = document.createElement("span");
        h.appendChild(t);
        var container = document.getElementById("dataPersonal");
        container.innerHTML = null;
        container.appendChild(h);
        
    };
