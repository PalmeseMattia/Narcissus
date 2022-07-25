const API_LINK = 'https://www.bitstamp.net/api/v2/trading-pairs-info/'

export async function getAllTickers(){
    const res = await fetch(API_LINK);
    const tickers = await res.json();
    
    return tickers;
}