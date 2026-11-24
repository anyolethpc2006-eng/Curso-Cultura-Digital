function evaluarQuiz1() { 
    const respuestaCorrecta = "b"; 
    const seleccionada = document.querySelector('input[name="p1"]:checked'); 
    const contenedorResultado = document.getElementById("resultado1"); 
    if (!seleccionada) { 
        contenedorResultado.innerHTML = "<p style='color: orange; font-weight: bold;'>⚠️>Por favor, selecciona una respuesta antes de enviar.</p>"; return;
    } 
    if (seleccionada.value === respuestaCorrecta) { 
        contenedorResultado.innerHTML = "<p style='color: green; font-weight: bold;'>🎉 ¡Correcto! Respuesta acertada. La identidad digital incluye tu nombre de usuario, dirección IP y huella digital.</p>"; 
    } else { 
        contenedorResultado.innerHTML = "<p style='color: red; font-weight: bold;'>❌ Incorrecto.</strong> Inténtalo de nuevo.</p>"; 
    } 
}
function evaluarQuiz2() { 
    const respuestaCorrecta = "a"; 
    const seleccionada = document.querySelector('input[name="p2"]:checked'); 
    const contenedorResultado = document.getElementById("resultado2"); 
    if (!seleccionada) { 
        contenedorResultado.innerHTML = "<p style='color: orange; font-weight: bold;'>⚠️>Por favor, selecciona una respuesta antes de enviar.</p>"; 
        return;
    } 
    if (seleccionada.value === respuestaCorrecta) { 
        contenedorResultado.innerHTML = "<p style='color: green; font-weight: bold;'>🎉¡Correcto! Respuesta acertada. La Ley General de Protección de Datos Personales garantiza tus derechos ARCO.</p>"; 
    } else { 
        contenedorResultado.innerHTML = "<pstyle='color: red; font-weight: bold;'>❌Incorrecto.</strong> Inténtalo de nuevo.</p>"; 
    } 
}
function evaluarQuiz3() { 
    const respuestaCorrecta = "b"; 
    const seleccionada = document.querySelector('input[name="p3"]:checked'); 
    const contenedorResultado = document.getElementById("resultado3"); 
    if (!seleccionada) { 
        contenedorResultado.innerHTML = "<p style='color: orange; font-weight: bold;'>⚠️>Por favor, selecciona una respuesta antes de enviar.</p>"; 
        return;
    } 
    if (seleccionada.value === respuestaCorrecta) { 
        contenedorResultado.innerHTML = "<p style='color: green; font-weight: bold;'>🎉¡Correcto! Respuesta acertada. Mantener una comunicación respetuosa y evitar spam fomenta un entorno digital seguro.</p>"; 
    } else { 
        contenedorResultado.innerHTML = "<p style='color: red; font-weight: bold;'>❌Incorrecto.</strong> Inténtalo de nuevo.</p>"; 
    } 
}