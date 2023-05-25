const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target, target2) => {
    elem.oninput = (event) => {
        const request = new XMLHttpRequest()
        request.open("GET", 'convert.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (event.target.classList.contains('som')) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.eur).toFixed(2)
            } else if (event.target.classList.contains('usd')) {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = ((elem.value * response.usd) / response.eur).toFixed(2)
            } else {
                target.value = (elem.value * response.eur).toFixed(2)
                target2.value = ((elem.value * response.eur) / response.usd).toFixed(2)
            }
            if (elem.value === '') {
                target.value = ''
                target2.value = ''
            }
        }
    }
}

convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)




