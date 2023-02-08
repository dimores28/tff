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

  const exchanges = ['binance', 'huobi', 'okx'];
  let exc = Math.trunc(getRandomArbitrary(0, 2));


   let card = `<div class="bg-box rounded-24p p-20p sm:p-40p flex items-center sm:flex-col sm:items-start idea-card">
                  <img src="images/exchanges/${exchanges[exc]}.png" class="mr-20p sm:w-48p sm:h-48p sm:mb-28p idea-card__img"/>
                  <div>
                     <h3 class="font-medium mb-4p sm:mb-8p text-base sm:text-20p sm:leading-6">
                        Crypto
                     </h3>
                     <div class="mt-8p text-sm leading-5 text-white/60">
                        Crypto
                     </div>
                     <div class="mt-8p text-sm leading-5 text-white/60">
                        BITMEX FUTURES
                     </div>
                  </div>
               </div>`;

   let div = document.createElement('div');
   div.className = 'crypto-card';
   div.innerHTML = card;

   document.body.append(div);
   setTimeout(()=> div.remove(), 500);

}


// setInterval(guaranteeCard, 1000);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
