import axios from 'axios'

const url ='https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifiedData

    } catch (error) {
        
    }
}

export const fetchDailyDate = async() =>
{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            data: dailyData.reportDate,
        }));
        return (modifiedData);
    } catch (error) {
        
    }
}

export const countrries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);
        console.log("countrries -> response", response)
        
        
    } catch (error) {
        
    }
}