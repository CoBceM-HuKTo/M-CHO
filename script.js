document.getElementById('slider').play()
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    let s = 'index2.html'
} else {
    let s ='index.html'
}
window.open(s, '_self', false)