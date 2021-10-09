var BASE_API = 'https://api.covid19api.com/'
let valueTotalConfirmed = document.querySelector('.valueTotalConfirmed'),
    valueTotalDeaths    = document.querySelector('.valueTotalDeaths'),
    valueTotalRecovered = document.querySelector('.valueTotalRecovered')
    select              = document.getElementById('countries')



main()

function main() {
    init()
    initCountries()
}


async function init() {

    const response = await fetch(`${BASE_API}summary`)
    const { Global: { TotalConfirmed, TotalDeaths, TotalRecovered } } = await response.json()
    valueTotalConfirmed.innerHTML = TotalConfirmed
    valueTotalDeaths.innerHTML    = TotalDeaths
    valueTotalRecovered.innerHTML = TotalRecovered

}

async function initCountries() {

    const response = await fetch(`${BASE_API}countries`)
    const data     = await response.json()

    let optionSelected = document.createElement('option')
    optionSelected.value = ''
    optionSelected.text = 'Global'
    optionSelected.selected = true

    select.add(optionSelected)

    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
        let option = document.createElement('option')
        option.value = data[i].Slug
        option.text = data[i].Country
        select.add(option)
    }

    
}