export function openWhatsapp() {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE || ""
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
}
