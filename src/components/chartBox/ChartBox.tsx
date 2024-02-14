import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import './chartbox.scss'

type Props =  {
    color : string;
    icon : string;
    title : string;
    dataKey : string;
    number : string | number;
    percentage : number;
    chartData : object[];
} 


const ChartBox = (props : Props) => {
    return (
        <div className="ChartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/" style={{color : props.color}}>View All</Link>
            </div>
            <div className="chartInfo">
                    <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    
                <LineChart  data={props.chartData}>
                    <Tooltip contentStyle={{background:"transparent", border:"none"}} 
                             labelStyle={{display:"none"}}
                             position={{ x: 20, y: 60}}/>
                <Line type="monotone" dataKey="props.dataKey" stroke={props.color} strokeWidth={2} dot={false} />
                </LineChart>
                </ResponsiveContainer>
                    </div>    
              <div className="texts">
                <p className="percentage" style={{color : props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}</p>
                <p className="thismonth">this month</p>
              </div>
            </div>
        </div>
    )
}
export default ChartBox
