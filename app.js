const noticiasMinecraft = document.getElementById('noticiasMinecraft')
const noticia = document.getElementById('noticia').content
const fragment = document.createDocumentFragment()

let news = []

document.addEventListener('DOMContentLoaded', () => {
    cargaMinecraft()
})

const cargaMinecraft = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4904ff981dmsh9e81fbad5f2a81ep118290jsn7fd5bd4f856b',
            'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
        }
    };
    
    
    fetch('https://league-of-legends-esports.p.rapidapi.com/teams?id=lng-esports', options)
        .then(response => response.json())
        .then(response => {
            news = response.data.teams[0].players
            dibujaNoticias()
            console.log(news)
        })
        .catch(err => console.log(err));
}

const dibujaNoticias = () => {
    news.forEach((item) => {
        noticia.querySelector('h1').textContent = item.id
        noticia.querySelector('h2').textContent = item.summonerName
        noticia.querySelector('h3').textContent = item.firstName
        noticia.querySelector('h4').textContent = item.role
    

        const clone = noticia.cloneNode(true)
        fragment.appendChild(clone)
    })
    noticiasMinecraft.appendChild(fragment)
}