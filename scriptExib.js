function GET(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    console.log(url)
    return request
}

function currencyFunc(){
    url = "https://api.coindesk.com/v1/bpi/currentprice.json"

    responseTxt = GET(url).responseText
    JSONdata = JSON.parse(GET(url).responseText)

    usCurr = document.querySelector('#UScurrency')
    ukCurr = document.querySelector('#UKcurrency')
    ueCurr = document.querySelector('#UEcurrency')

    usCurr.innerHTML += ("$"+ (JSONdata.bpi.USD.rate))
    ukCurr.innerHTML += ("£"+(JSONdata.bpi.GBP.rate))
    ueCurr.innerHTML += ("€"+(JSONdata.bpi.EUR.rate))

}

currencyFunc()
