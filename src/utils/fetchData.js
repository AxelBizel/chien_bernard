export const fetchData = async (pageName) => {
  const spreadSheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const rawData = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}/values/${pageName}?alt=json&key=${apiKey}`
  );
  const data = await rawData.json();
  return data.values;
};
