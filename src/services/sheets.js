const STORAGE_KEY = "sheet_data";
const CACHE_EXPIRE_TIME_IN_MIN = 48 * 60;
let CACHE = {};

/**
 * To get the formatted google sheet data
 * @params {String} sheetId The sheet ID to get the data from
 * @params {String} sheetName The name of sheet to get data from
 */
export default async function getSheetsData(sheetId, sheetName, year) {
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
  const cacheDataPerYear = [];
  if (cache && cache.data && cache.createdAt + cacheLife > Date.now()) {
    for (const i in cache.data) {
      if (cache.data[i].season === year) {
        cacheDataPerYear.push(cache.data[i]);
      }
    }
    return cacheDataPerYear;
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

  const data = await response.json();

  if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const dataArray = [];
    const dataArrayPerYear = [];
    for (const row of data.feed.entry) {
      const elem = {};
      for (const key in row) {
        if (key.startsWith("gsx$")) {
          const keyToStore = key.slice(4);
          if (row[key]["$t"] !== undefined) {
            elem[keyToStore] = row[key]["$t"];
          } else {
            elem[keyToStore] = row[key];
          }
        }
      }

      dataArray.push(elem);
    }
    for (const i in dataArray) {
      if (dataArray[i].season === year) {
        dataArrayPerYear.push(dataArray[i]);
      }
    }
    CACHE[cacheKey] = {
      data: dataArray,
      createdAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CACHE));
    return dataArrayPerYear;
  }
  console.error(data);
  return null;
}
