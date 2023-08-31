// https://exchangerate.host/#/#docs
'use strict'

const currensyAmount = document.querySelector('.converter__currency-amount')
const convertBtn = document.querySelector('.converter__convert')
const converterResult = document.querySelector('.converter__result')
const inpurCurrensy = document.querySelector('.converter__input .converter__currency')
const outputCurrensy = document.querySelector('.converter__output .converter__currency')


const digits = /[^\d\.]/g

const base = 'USD'
const symbols = 'RUB,EUR,USD'
const url = `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`

const addValidaton = (input, regExp) => {
    input.addEventListener('input', (event) => {
        input.value = input.value.replace(regExp, '')
        // console.log(typeof input.value);
        if (input.value && input.value.match(/\./g)) {
            if (input.value.match(/\./g).length > 1) {
                input.value = input.value.slice(0, input.value.length - 1)
            }
            
        }
    })
}

addValidaton(currensyAmount, digits)

fetch(url)
    .then(response => response.json())
    .then(data => {
        convertBtn.addEventListener('click', (e) => {
            e.preventDefault()
            convertBtn.classList.add('rotate')

            setTimeout(() => {
                convertBtn.classList.remove('rotate')
            }, 400)

            converterResult.innerText = (currensyAmount.value * data.rates[outputCurrensy.value] / data.rates[inpurCurrensy.value]).toFixed(2)
        })
    })