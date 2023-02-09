let hideBtn = document.querySelector("#hide-btn");
hideBtn.addEventListener("click", function () {
  document.querySelector("#mobileMenu").style.display = "none";
});

let btnShow = document.querySelector("#show");
btnShow.addEventListener("click", function () {
  console.log("show");
  document.querySelector("#mobileMenu").style.display = "block";
});

let data = [1.65, 1.73, 1.73, 1.73, 1.73, 1.73, 1.73];

var options = {
  series: [
    {
      name: "profit",
      data: data
    }
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      autoSelected: "pan",
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z"
    ]
  },
  tooltip: {
    enabled: true,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    custom: undefined,
    fillSeriesColor: false,
    theme: true,
    style: {
      fontSize: "14px"
    },
    style: {
      fontSize: "12px",
      color: "#00c868",
      background: "#333"
    },
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};

var chart = new ApexCharts(
  document.querySelector("#apexchartsziwzcw17"),
  options
);
chart.render();

document
  .querySelector("#setDay")
  .addEventListener("click", function () {
    data = [1.65, 1.73, 1.73, 1.73, 1.73, 1.73, 1.73];

    chart.updateSeries([
      {
        data: data
      }
    ]);
  });

document
  .querySelector("#setWeek")
  .addEventListener("click", function () {
    data = [1.36, 1.42, 1.5, 1.57, 1.65, 1.73, 1.73];

    chart.updateSeries([
      {
        data: data
      }
    ]);

    chart.updateOptions({
      xaxis: {
        categories: [
          "2023-09-19T00:00:00.000Z",
          "2023-09-20T01:30:00.000Z",
          "2023-09-21T02:30:00.000Z",
          "2023-09-22T03:30:00.000Z",
          "2023-09-23T04:30:00.000Z",
          "2023-09-24T05:30:00.000Z",
          "2023-09-25T06:30:00.000Z"
        ]
      }
    });
  });

document
  .querySelector("#setMount")
  .addEventListener("click", function () {
    data = [0.75, 0.87, 1.06, 1.23, 1.5, 1.65, 1.73];

    chart.updateSeries([
      {
        data: data
      }
    ]);

    chart.updateOptions({
      xaxis: {
        categories: [
          "2023-01-19T00:00:00.000Z",
          "2023-02-20T01:30:00.000Z",
          "2023-03-21T02:30:00.000Z",
          "2023-04-22T03:30:00.000Z",
          "2023-05-23T04:30:00.000Z",
          "2023-06-24T05:30:00.000Z",
          "2023-07-25T06:30:00.000Z"
        ]
      }
    });
  });





function guaranteeCard() {

  const exchanges = ['binance', 'huobi', 'okx', 'KuCoin', 'CryptoCom', 'Bitget', 'Bitfinex', 'Kraken']; // 8
  const stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI', 'TrueUSD', 'UST', 'FRAX', 'TUSD', 'USDP', 'FEI']; //10
  const cryptocurrencies = [
    'BTC', 'ETH', 'BCH', 'XRP', 'LTC', 'MIOTA', 'ADA', 'Dash', 'Nem', 'XMR', 'ADA', 'SOL', 'DOT', 'LTC', 'AVAX', 'MATIC', 'UNI', 'BNB', 'SHIB', 'TRX', 'LINK', 'ETC', 'TON', 'NEAR', 'ICP', 'HT', 'CRO'
  ]; //27

  let exc = generateRandomInteger(0, 7);
  let crypto = generateRandomInteger(500, 5000);
  let currency= generateRandomInteger(500, 5000);

  console.log('crypto: ', crypto);
  console.log('currency: ', currency);


   let card = `<div class="bg-box rounded-24p p-20p flex items-center sm:flex-col sm:items-start idea-card">
                  <img src="images/exchanges/${exchanges[exc]}.png" class="mr-20p sm:w-48p sm:h-48p sm:mb-8p idea-card__img"/>
                  <div>
                     <div class="mt-8p text-sm leading-5 text-white/60">
                        ${cryptocurrencies[generateRandomInteger(0, 26)]} - ${crypto} $
                     </div>
                     <div class="mt-8p text-sm leading-5 text-white/60">
                        ${stablecoins[generateRandomInteger(0, 9)]} - ${currency} $
                     </div>
                     <div class="mt-8p text-sm leading-5 text-white/60">
                        Total: ${crypto + currency} $
                     </div>
                  </div>
               </div>`;

   let div = document.createElement('div');
   div.className = 'crypto-card';
   div.innerHTML = card;

   document.body.append(div);
   setTimeout(()=> div.remove(), 500);

}


setInterval(guaranteeCard, 1000);

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
