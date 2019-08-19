$(function () {

    function getCapital(search, callback) {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/currency/${search}`,
            method: "GET",
            success: function (data) {

                callback(data)
            },
            error: function () {
                $("#currencyCard").html("<h1>there was a problem :( </h1>")
            }
        })
    }
    $(".currency").on("click", function () {
        getCapital(this.id, (result) => {
            $("#currencyCard").html(draw(result))
        })

    })

    $("#selectCurrency").on("change", function () {
        getCapital($("#selectCurrency").val(), (result) => {
            $("#currencyCard").html(draw(result))
        })

    })


})

function draw(array) {
    return array.reduce((string, country) => {
        const { name, capital, flag } = country
        const cardContainer = `<div class="card capital m-1">
            <img src="${flag}" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-title">${capital}</h5>
                </div>
            </div>`
        return string = string + cardContainer
    }, '')
}










///////////////////////////////////////
// function getCountries(callback) {
//     $.ajax({
//         url: "https://restcountries.eu/rest/v2/all",
//         method: "GET",
//         success: function (result, status, response) {
//             console.log(status, response)
//             // callback(result)
//         },
//         error: function (err) {
//             $("#countries").html("<h1>No Data!</h1>")
//         }
//     })
// }

// function getCountriesByName(name, callback) {
//     $.ajax({
//         url: `https://restcountries.eu/rest/v2/name/${name}`,
//         method: "GET",
//         success: function (result, status, response) {
//             console.log(status, response)
//             callback(result)
//         },
//         error: function (err) {
//             $("#countries").html("<h1>No Data!</h1>")
//         }
//     })
// }
// $(function () {

//     $("#search").on("click", function () {
//         const cName = $("#country").val()
//         getCountriesByName(cName, (result) => {
//             $("#countries").html(getCountriesNames(result))
//         })
//     })

// })

// function getCountriesNames(countries) {
//     return countries.map(c => `<h1>${c.name}</h1>`)
// }
// getCountries((countries) => {
//     $("#countries").html(getCountriesNames(countries))
// });