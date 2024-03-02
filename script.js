// Obtener las referencias a las cajas de texto
const textoNormalInput = document.getElementById("textoNormal");
const textoEncriptadoInput = document.getElementById("textoEncriptado");

// Agregar un evento de entrada a la caja de texto normal para encriptar automáticamente
textoNormalInput.addEventListener("input", function() {
    const texto = textoNormalInput.value;
    const textoEncriptado = encriptar(texto);
    textoEncriptadoInput.value = textoEncriptado;
});

// Agregar un evento de entrada a la caja de texto encriptada para desencriptar automáticamente
textoEncriptadoInput.addEventListener("input", function() {
    const textoEncriptado = textoEncriptadoInput.value;
    const textoDesencriptado = desencriptar(textoEncriptado);
    textoNormalInput.value = textoDesencriptado;
});

function encriptar(texto) {
    return texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
}

