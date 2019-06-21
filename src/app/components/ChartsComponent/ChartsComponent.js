

import React,{Component} from 'react';
import {connect} from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ChartsComponent.css';


class ChartsComponent extends Component {
    
    render(){
        var eeee = 1
        if(this.props.chartData.length > 0){
            return(
                <div className='ChartContainer'>
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.chartData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="main.temp"   name="Unique Visitors"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='main.temp' fill="#8884d8" />
                </BarChart>
        </div>
            )
        }
        else{
            return false
        }
        
    }
}
const mapStatToProps = (state) => {
    return{
        unit: state.unit,
        chartData: state.chartData,
    }
}

export default connect(mapStatToProps)(ChartsComponent)


