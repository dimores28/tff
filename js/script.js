let hideBtn = document.querySelector("#hide-btn");
hideBtn.addEventListener("click", function () {
  document.querySelector("#mobileMenu").style.display = "none";
});

let btnShow = document.querySelector("#show");
btnShow.addEventListener("click", function () {
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
    height: 500,
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
  },
  responsive: [{
    breakpoint: 1000,
      options: {
        chart: {
          width: "100%",
          height: 380,
        }
      },
  },
  {
    breakpoint: 600,
    options: {
      chart: {
        width: "100%",
        height: 280,
      }
    },
  },]
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


  // По этим транзакциям думал так: [Покупка или продажа] [количество монет] [монета] [название биржи]

  // [Покупка или продажа] [количество монет рандом от 50 до 5000 для всех монет, кроме BTC и ETH, у них от 0.01 до 2.5] [монета, например USDT, BTC] на бирже [название биржи].
  
  // Логотип слева от тикера монеты маленький логотип 24*24px. Слева от всей строчки с небольшим марджином логотип биржи 24*24px.
  
  // Разрешение картинок сделать максимально ниже до размера отображения. При 24px должна быть картинка 48px, с учетом плотности пикселей на ретина дисплеях и всё такое.
  
  // Сделать таких строчек с покупками/продажами шесть и в каждой рандомом меняются значения сумм, валют и бирж.
  
  // 50 валют: coinmarketcap.com
  
  // Список бирж: 'binance', 'huobi', 'okx', 'KuCoin', 'CryptoCom', 'Bitget', 'Bitfinex', 'Kraken'.


function guaranteeCard() {

  const exchanges = ['Binance', 'Huobi', 'Okx', 'KuCoin', 'CryptoCom', 'Bitget', 'Bitfinex', 'Kraken']; // 8
  const cryptocurrencies = [
    'BTC', 'ETH', 'USDT', 'BCH', 'XRP', 'LTC', 'MIOTA', 'ADA', 'Dash', 'AXS', 
    'EOS', 'FLOW', 'SOL', 'DOT', 'EGLD', 'AVAX', 'MATIC', 'UNI', 'BNB', 'SHIB', 
    'TRX', 'LINK', 'ETC', 'TON', 'NEAR', 'ICP', 'HT', 'CRO', 'USDC', 'BUSD',
    'DOGE', 'DAI', 'ATOM', 'WBTC', 'SAND', 'LEO', 'AAVE', 'XMR', 'LUNC', 'OKB',
    'XLM', 'APT', 'LDO', 'APE', 'FIL', 'ALGO', 'VET', 'HBAR', 'MANA', 'GRT'
  ]; //50

  const trades = ['Purchase', 'Sale'];

  let exc = generateRandomInteger(0, 7);
  let crypto = generateRandomInteger(0, 49);
  let trade = generateRandomInteger(0, 1);

  let currency = 0;
  

  if(cryptocurrencies[crypto] === 'BTC' || cryptocurrencies[crypto] === 'ETH') {
    currency = getRandomArbitrary(0.01, 2.5).toFixed(4);
  } else {
    currency = generateRandomInteger(500, 5000);
  }

  // console.log('crypto: ', crypto);
  // console.log('currency: ', currency);


   let card = `<div class="bg-box rounded-24p p-20p flex items-center sm:flex-col sm:items-start crypto-card__block">
                  <div class="flex items-center">
                      <p class="crypto-card__trade">
                        ${trades[trade]} : ${currency}
                      </p>
                      <div class="flex items-center">
                        <img src="images/currency/${cryptocurrencies[crypto]}.webp" class="crypto-card__img" alt="currency logo" width="24" height="24"/>
                        <span class="crypto-card__text">${cryptocurrencies[crypto]}</span>
                      </div>
                  </div>
                  <div
                      class="mt-8p mb-4p text-sm leading-5 text-white/60 flex items-center">
                      <img src="images/exchanges/${exchanges[exc]}.webp" class="crypto-card__img" alt="exchange logo" width="24" height="24"/>
                      <span class="crypto-card__text">${exchanges[exc]}</span>
                  </div>
                </div>`;

     
              


   let div = document.createElement('div');
   div.className = 'crypto-card';
   div.innerHTML = card;

   document.body.append(div);
   setTimeout(()=> div.remove(), 1000);

}

let windowInnerWidth = document.documentElement.clientWidth;
let refreshId = null; 

if (windowInnerWidth > 630) {
  refreshId = setInterval(guaranteeCard, 2000);
}


window.addEventListener('resize', function() {
  windowInnerWidth = document.documentElement.clientWidth;

  if (windowInnerWidth < 630) {
    clearInterval(refreshId);
  }

});





function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let videoPlayer = document.querySelector('#player');

console.log(videoPlayer);
videoPlayer.addEventListener('play', function() {

  console.log('play');

  let playBtn = document.querySelector('.play .img');

  playBtn.style.display = 'none';
})
