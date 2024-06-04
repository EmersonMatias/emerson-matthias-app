export function sendToWpp(mensagem: string) {
    const mensagemEnconded = encodeURIComponent(`${mensagem}`)
    return window.open(`https://wa.me/5516992031949?text=${mensagemEnconded}`, '_blank');
}

export function sendToSite(link: string){
    return window.open(`${link}`, '_blank');

}