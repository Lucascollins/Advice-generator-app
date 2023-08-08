async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    let idV = data.slip['id']
    let textV = data.slip['advice']
    let id =  document.querySelector('.advice-title')
    let text = document.querySelector('.advice-text')
    id.innerHTML = idV  
    text.innerHTML = textV
 
}

 getData()