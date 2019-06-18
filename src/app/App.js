import React,{Component} from 'react';
import logo from './../logo.svg';
import apiUrl from './config';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.fetchData();
    console.log(this.props.data)
  }

  fetchData = () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      this.props.storeData(data.list)
    })
    .catch(error => console.error(error))
  }

  render(){
  return (
    <div className="App">
      
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => { dispatch({type:'STORE_DATA', data: data}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
