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
            'X-RapidAPI-Key': '676a537e70mshff52d286f63a671p10a789jsnd9caa5cd15aa',
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
        noticia.querySelector('.id').textContent = item.id
        noticia.querySelector('.slug').textContent = item.summonerName
        noticia.querySelector('.name').textContent = item.firstName
        noticia.querySelector('.role').textContent = item.role
        noticia.querySelector('img').setAttribute('src', item.image) 

        const clone = noticia.cloneNode(true)
        fragment.appendChild(clone)
    })
    noticiasMinecraft.appendChild(fragment)
}