import React,{Component} from 'react';
import logo from './../logo.svg';
import apiUrl from './config';
import './App.css';
import {connect} from 'react-redux';

import WeatherScreen from './containers/weatherScreen';

class App extends Component {
  componentWillMount(){
    this.fetchData();
  }

  fetchData = () => {
    fetch(apiUrl+'&units='+this.props.unit)
    .then(response => response.json())
    .then(data => {
      this.props.isLoading(false)
      this.props.storeData(data.list)
    })
    .catch(error => console.error(error))
  }

  render(){
    console.log(this.props.unit)
    if(this.props.loading == true){
      return(
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      )
    }
    else{
      return (
        <div className='app'>
            <WeatherScreen/>
        </div>
      );
    }
}
}
const mapStatToProps = (state) => {
  return{
      data: state.data,
      loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      storeUnit: (unit) => { dispatch({type:'STORE_UNIT', unit: unit}) },
      storeData: (data) => { dispatch({type:'STORE_DATA', data: data}) },
      isLoading: (loading) => { dispatch({type:'IS_LOADIGN', loading:loading})}

  }
}
export default connect(mapStatToProps, mapDispatchToProps)(App)
