import React,{Component} from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import apiUrl from '../../config';

import './RBoxComponent.css';


class RBComponent extends Component {

    componentDidUpdate(nextProps){
        if(nextProps.unit !== this.props.unit){ 
            this.fetchData();
        }          
    }

    handleChange = (event) => {
        this.props.storeUnit(event.target.value)
        
    }

    fetchData = () => {
        fetch(apiUrl+'&units='+this.props.unit)
        .then(response => response.json())
        .then(data => {
          this.props.storeData(data.list)
        })
        .catch(error => console.error(error))
      }

    render(){
        console.log(this.props.data)
        return(
            <div className='radioContainer'>
                <div className="cgroup">
                <Radio
                    className='crbox'
                    checked={this.props.unit === 'metric'}
                    onChange={this.handleChange}
                    value="metric"
                    name="celsius"
                    inputProps={{ 'aria-label': 'C' }}
                />
                <p className="unitLabel">Celsius</p>
                </div>

                <div className="fgroup">
                <Radio
                    className='frbox'
                    checked={this.props.unit === 'imperial'}
                    onChange={this.handleChange}
                    value="imperial"
                    name="fahrenheit"
                    inputProps={{ 'aria-label': 'F' }}
                />
                <p className="unitLabel">Fahrenheit</p>
                </div>
            </div>
        )
    }
}
  
const mapStatToProps = (state) => {
    return{
        data: state.data,
        unit: state.unit,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeUnit: (unit) => { dispatch({type:'STORE_UNIT', unit: unit}) },
        storeData: (data) => { dispatch({type:'STORE_DATA', data: data}) }

    }
}
export default connect(mapStatToProps, mapDispatchToProps)(RBComponent)