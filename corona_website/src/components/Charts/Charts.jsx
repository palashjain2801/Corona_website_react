import React, {useState,useEffect} from 'react'
import {fetchDailyDate } from '../../api'
import {Line , Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'
const Charts =({data , country}) =>{
    console.log("Charts -> data", data)
    const [dailyDate, setDailyData] = useState([])
    useEffect(()=>{
        const fetchAPI = async() =>{
            setDailyData(await fetchDailyDate());
        }
       // console.log("Charts -> dailyData", dailyData)

        fetchAPI();
    },[]);
    const lineChart = (    
        dailyDate[0] ?(  <Line
            data = {{
                labels:dailyDate.map(({date}) => date),
                datasets:[{
                    data: dailyDate.map(({confirmed})=> confirmed),
                    label:'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyDate.map(({deaths})=> deaths),
                    label:'Deaths',
                    borderColor: 'rgba(255 ,0,0,0.5)',
                    fill: true
                }]
            }} />) : null
    );
    const barchart = (
        data.confirmed?(
            <Bar
            data = {{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255 ,0,0,0.5)',
                    ],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }]

            }}
            options={{
                legends: {display:false},
                title: {title: true, text:`current state in ${country}`},
            }}
            />


        ):null
    )
    return(
        <div className = {styles.container}>
        {country?barchart:lineChart}

        </div>
    )
}

export default Charts;