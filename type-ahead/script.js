let search = document.getElementById('search')
    loading = document.querySelector('.lds-ellipsis')
    results = document.querySelector('ul.search-results')

search.addEventListener('keyup', searchInput)

let cities = []

async function fetchData() {

    loading.style.display = 'inline-block';
    const response = await fetch('https://raw.githubusercontent.com/magnobiet/states-cities-brazil/master/JSON/cities.json')
    const data = await response.json()
    cities = [...data]
    loading.style.display = 'none'

}

function searchInput(event) {
    let wordToMatch = event.target.value
    if(wordToMatch == '') return results.innerHTML = ''

    let regex = new RegExp(wordToMatch, 'i'),
        matches = cities.filter(({ name }) => name.match(regex)).map(item => ({ name: item.name }))

    displayResults(wordToMatch,regex,matches)
}


function displayResults(wordToMatch,regex,matches) {

    if(matches == '') return results.innerHTML = ''

    const htmlItems = matches.map(item => {
        let value = item.name.replace(regex,`<span class="search-highlight">${wordToMatch}</span>`)
        return `<li>${value}</li>`
    }).join('')

    results.innerHTML = htmlItems

}



fetchData()

//console.log(search)