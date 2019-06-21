import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardComponent from '../components/Card/Card';
import RBoxComponent from '../components/RBoxComponent/RBoxComponent';
import ChartsComponent from '../components/ChartsComponent/ChartsComponent';


class WeatherScreen extends Component{
    render(){
        return(
            <div className="weatherScreenContainer">
                <RBoxComponent/>
                <CardComponent/>
                <ChartsComponent/>
            </div>
        )
    }
}

export default WeatherScreen;