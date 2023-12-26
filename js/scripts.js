const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos 2

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    if (!qrCodeInputValue) return

    qrCodeBtn.innerText = "Gerando código..."
// eu vou alterar o atributo src a partir do link
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    // qrCodeImg.addEventListener("load", () => {
    //     container.classList.add("active")
    //     qrCodeBtn.innerText = 'Código criado!'
    // })

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código criado."
    })
}


qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
   if(e.code === "Enter") {
    generateQrCode()
   }
   // Limpar área do QR Code
   qrCodeInput.addEventListener("keyup", () => {
    container.classList.remove("active")
    qrCodeBtn.innerText = "Gerar QR Code"
   })
})




























