document.getElementById("fetchPrice").addEventListener("click", function() {
    const stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
    const apiKey = "YOUR_API_KEY"; // Replace with your API key from Alpha Vantage or Yahoo Finance
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data["Time Series (5min)"]) {
          const latestTime = Object.keys(data["Time Series (5min)"])[0];
          const stockPrice = data["Time Series (5min)"][latestTime]["4. close"];
  
          // Convert the price to INR (if necessary)
          const priceInINR = parseFloat(stockPrice); // Assuming price is in USD, convert to INR if needed
          document.getElementById("price").textContent = priceInINR.toFixed(2);
        } else {
          alert("Invalid stock symbol or unable to fetch data.");
        }
      })
      .catch(error => {
        console.error("Error fetching stock data:", error);
        alert("An error occurred while fetching the stock price.");
      });
  });
  