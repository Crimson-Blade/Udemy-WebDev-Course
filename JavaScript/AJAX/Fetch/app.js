// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

console.log("something");
const fetchBitcoinPrice = async () => {
    try {
        await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
            .then(response => response.json())
            .then(data => console.log(data.joke));
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}
fetchBitcoinPrice();