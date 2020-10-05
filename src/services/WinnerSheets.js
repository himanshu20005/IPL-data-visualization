const STORAGE_KEY = "sheet_data";
const CACHE_EXPIRE_TIME_IN_MIN = 48 * 60;
let CACHE = {};

/**
 * To get the formatted google sheet data
 * @params {String} sheetId The sheet ID to get the data from
 * @params {String} sheetName The name of sheet to get data from
 */
export default async function getSheetsData(sheetId, sheetName) {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    try {
      CACHE = await JSON.parse(storedData);
    } catch (err) {
      console.error("Imporper data in localStorage");
    }
  }

  const cacheKey = `${sheetId}-${sheetName}`;
  const cache = CACHE[cacheKey];
  const cacheLife = CACHE_EXPIRE_TIME_IN_MIN * 60 * 1000;
  if (cache && cache.data && cache.createdAt + cacheLife > Date.now()) {
    return cache.data;
  }

  const response = await fetch(
    `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetName}/public/values?alt=json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status >= 400) {
    console.error("Sheets API error");
    return null;
  }

  var chartData = {
    labels: [],
    datasets: [],
  };
  var chartDataSet = {
    label: "Win Count",
    data: [],
    backgroundColor: [
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
      "rgba(155, 99, 132, 0.6)",
      "rgba(55, 99, 132, 0.6)",
      "rgba(54, 122, 235, 0.6)",
      "rgba(255, 106, 86, 0.6)",
      "rgba(75, 122, 192, 0.6)",
      "rgba(153, 102, 155, 0.6)",
      "rgba(225, 159, 94, 0.6)",
      "rgba(95, 96, 132, 0.6)",
    ],
  };

  const data = await response.json();
  if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
    let teamArray = [];
    let winCount = [];
    for (const row of data.feed.entry) {
      const elem = {};
      for (const key in row) {
        if (key.startsWith("gsx$")) {
          const keyToStore = key.slice(4);
          if (row[key]["$t"] !== undefined) {
            if (keyToStore === "teams") {
              teamArray.push(row[key]["$t"]);
            } else if (keyToStore === "wins") {
              winCount.push(row[key]["$t"]);
            }
          }
        }
      }
    }
    chartData.labels = teamArray;

    //chartData.datasets.data = winCount;
    chartDataSet.data = winCount;
    chartData.datasets.push(chartDataSet);

    CACHE[cacheKey] = {
      data: chartData,
      createdAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CACHE));

    return chartData;
  }
  console.error(data);
  return null;
}
