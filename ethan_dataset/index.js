yearArray = [];
dataArray = [];

async function getData() {
    const response = await fetch("ethan_sample.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = parseFloat.row[1] + 14;
              console.log(year, temp);
              yearArray.push(year)
              dataArray.push(temp)
            });
            console.log(yearArray);
            console.log(dataArray);
          }
    //end of functions
    //call the function to test if you see the image on the left in the console

    getData()


const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: yearArray,
        datasets: [{
          label: 'Global Average Temperature',
          data: dataArray,
          borderWidth: 1
          
        }]
      },
      options: {
        scales: {
          y: {
            beingAtZero: false
          }
        }
      }
    });