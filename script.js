var url = 'https://api.adviceslip.com/advice'


async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    let idV = data.slip['id']
    let textV = data.slip['advice']
    function reload(){
        let id =  document.querySelector('.advice-title')
        let text = document.querySelector('.advice-text')
        id.textContent = `ADVICE # ${idV}`
        text.textContent = textV
    }   
    reload()
}

getData()