$(function () {

    function getCapital(search, callback) {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/currency/${search}`,
            method: "GET",
            success: function (data) {

                callback(data)
            },

        })
    }
    $(".currency").on("click", function () {
        getCapital(this.id, (result) => {
            $("#currencyCard").html(drawCard(result))
        })

    })
})

function drawCard(array) {
    return array.reduce((string, country) => {
        const { name, capital, flag } = country
        const cardContainer = `<div class="card capital m-1">
            <img src="${flag}" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-title">${capital}</h5>
                </div>
            </div>`
        return string += cardContainer
    }, "")
}