// https://exchangerate.host/#/#docs

const url = 'https://api.exchangerate.host/convert?from=USD&to=RUB'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })