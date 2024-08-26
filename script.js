function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/a/g, "4")
        .replace(/o/g, "0")
        .replace(/u/g, "µ")
        .replace(/b/g, "ß")
        .replace(/c/g, "¢")
        .replace(/d/g, "ð")
        .replace(/f/g, "ƒ")
        .replace(/g/g, "9")
        .replace(/h/g, "ħ")
        .replace(/j/g, "ʝ")
        .replace(/k/g, "κ")
        .replace(/l/g, "1")
        .replace(/m/g, "м")
        .replace(/n/g, "и")
        .replace(/p/g, "ρ")
        .replace(/q/g, "φ")
        .replace(/r/g, "я")
        .replace(/s/g, "5")
        .replace(/t/g, "7")
        .replace(/v/g, "ν")
        .replace(/w/g, "ш")
        .replace(/x/g, "×")
        .replace(/y/g, "¥")
        .replace(/z/g, "2");

    document.getElementById("outputText").textContent = textoEncriptado || "Ningún mensaje fue encontrado";
    
    let copyButton = document.getElementById("copyButton");
    copyButton.style.display = textoEncriptado ? "block" : "none";
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = texto
        .replace(/3/g, "e")
        .replace(/1/g, "i")
        .replace(/4/g, "a")
        .replace(/0/g, "o")
        .replace(/µ/g, "u")
        .replace(/ß/g, "b")
        .replace(/¢/g, "c")
        .replace(/ð/g, "d")
        .replace(/ƒ/g, "f")
        .replace(/9/g, "g")
        .replace(/ħ/g, "h")
        .replace(/ʝ/g, "j")
        .replace(/κ/g, "k")
        .replace(/1/g, "l")
        .replace(/м/g, "m")
        .replace(/и/g, "n")
        .replace(/ρ/g, "p")
        .replace(/φ/g, "q")
        .replace(/я/g, "r")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/ν/g, "v")
        .replace(/ш/g, "w")
        .replace(/×/g, "x")
        .replace(/¥/g, "y")
        .replace(/2/g, "z");

    document.getElementById("outputText").textContent = textoDesencriptado || "Ningún mensaje fue encontrado";
}

function copiarTexto() {
    let texto = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
