let hideBtn = document.querySelector("#hide-btn");
hideBtn.addEventListener("click", function () {
  document.querySelector("#mobileMenu").style.display = "none";
});

let btnShow = document.querySelector("#show");
btnShow.addEventListener("click", function () {
  document.querySelector("#mobileMenu").style.display = "block";
});

function getRandomRealInclusive(min, max) {
  let random = Math.random() * (max - min + 1) + min;
  return random.toFixed(1);
}

function getChartsData(range) {
  let data = [];
  let categories = [];

  for(let i = 0, j = 0; i < range; i++, j += 7) {
    let num  = parseFloat(getRandomRealInclusive(2, 5));
    num = num > 5 ? 5 : num
    data.push(num);

    let now = new Date() ;
    categories.push(now.setDate(now.getDate() - j));
  }

  return { data: data, categories: categories } 
}

window.onload = function () {

  let { data, categories } = getChartsData(300)

  
  var options = {
    series: [
      {
        name: "profit",
        data: data
      }
    ],
    chart: {
      height: 500,
      type: "line",
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
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "datetime",
      categories:  categories,
      tickPlacement: 'on',
      tickAmount: 10,
      labels: {
        formatter: function(value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), 'dd MMM')
        }
      }
    },
    yaxis: {
      opposite: true,
      floating: false,
      labels: {
        style: {
          fontSize: '22px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
        },
        offsetX: -50,
        minWidth: 100,
        maxWidth: 160,
        formatter: function(val) {
          return "%" + val.toFixed(2);
        },
      },
      title: {
        style: {
          fontSize: '22px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
        }
      }
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
        fontSize: "22px",
        color: "#00c868",
        background:" #2F0DFF",
      },
      x: {
        format: 'dd MMM yyyy'
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

let now = new Date() ;
  
chart.zoomX(
      now.setDate(now.getDate() - 7*7 ),
      now
)
  

  document
  .querySelector("#setDay")
  .addEventListener("click", function () {

    let now = new Date() ;

    chart.zoomX(
      now.setDate(now.getDate() - 4*7),
      now
    )

    // let { data, categories } = getChartsData(4)

    // chart.updateSeries([
    //   {
    //     data: data
    //   }
    // ]);

    // chart.updateOptions({
    //   xaxis: {
    //     categories: categories,
    //   }
    // });
  });

  document
  .querySelector("#setWeek")
  .addEventListener("click", function () {
    let now = new Date() ;

    chart.zoomX(
      now.setDate(now.getDate() - 7*7),
      now
    )
  });

  document
  .querySelector("#setMount")
  .addEventListener("click", function () {
    let now = new Date() ;

    chart.zoomX(
      now.setDate(now.getDate() - 12*7),
      now
    )
  });

  document
  .querySelector("#setMount6")
  .addEventListener("click", function () {
    let now = new Date() ;

    chart.zoomX(
      now.setDate(now.getDate() - 26*7),
      now
    )
  });

  document
  .querySelector("#setYear")
  .addEventListener("click", function () {
      let now = new Date() ;

      chart.zoomX(
        now.setDate(now.getDate() - 52*7),
        now
      )
  });

  document
  .querySelector("#setYear5")
  .addEventListener("click", function () {
    let now = new Date() ;

    chart.zoomX(
      now.setDate(now.getDate() - 260*7),
      now
    )

    chart.updateOptions({
      xaxis: {
        tickAmount: 12,
      }
    });
  });

  document
  .querySelector("#setMax")
  .addEventListener("click", function () {
    chart.zoomX(
      now.setDate(now.getDate() - 300*7),
      now
    )
  });
  //===========================================================end 
}





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

videoPlayer?.addEventListener('play', function() {

  let playBtn = document.querySelector('.play .img');

  playBtn.style.display = 'none';
})



// document.querySelector('.video-content').addEventListener('click', function(){
//   let player = document.querySelector('#player');

//   if( player.paused ) {
//       player.play();
//   }else {
//       player.pause();
//   }
  
// });


let filterBtn = document.querySelectorAll('.tende-btn');
for(let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener('click', function(e) {

    let btn = document.querySelectorAll('.tende-btn');

    for(let j = 0; j < btn.length; j++) {
      btn[j].classList.remove('selected');
    }
     e.target.classList.add('selected');
  });

}


document.querySelector('#btnRisk')?.addEventListener('click', function() {
  document.querySelector('.risk-management')?.classList.toggle("_show");
});

document.querySelector("#license")?.addEventListener('click', function() {
  document.querySelector(".main-license")?.classList.toggle("_showLicense");
})
