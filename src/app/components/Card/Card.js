import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Card.css';


class CardComponent extends Component {
    showCurrentCharts = (item) => {
        const itemDate = item.slice(0,10);
        const result = this.props.data.filter(item => (item.dt_txt).slice(0,10) === itemDate );
        console.log(result);
        this.props.storeChartData(result)
    } 

    render(){
        const renderCards = this.props.data.map((item, i) => {
            if(i % 8 === 0){
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            var date  = new Date(item.dt_txt);
             return(
                 <Slide>
                 <Card className='card' onClick={()=>this.showCurrentCharts(item.dt_txt)}>
                     <CardContent className='cardContent'>
                        <div className="tempContainer">
                            <p className="tempTxt">
                                Temp:
                            </p>
                            <p className="temp">
                                {item.main.temp} {this.props.unit !== 'imperial' ? 'C' : 'F'}
                            </p>
                        </div>
                        <div className="dateContainer">
                            <p className="dateTxt">
                                Date:
                            </p>
                            <p className="date">
                                {date.toLocaleDateString("en-US", options)}
                            </p>
                        </div>
                        
                     </CardContent>
                 </Card>
                 </Slide>
             )
            }
         })
        return(
            <div className='cardContainer'>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={5}
                visibleSlides={3}
            >
            <div className="sliderContainer">
                <ButtonBack className="backBtn"><ArrowBack/></ButtonBack>
                <ButtonNext className="nextBtn"><ArrowForward/></ButtonNext>
            </div>  
            <Slider style={{paddingBottmo:'10%'}}>
                {renderCards}
            </Slider>  
        </CarouselProvider>        
</div>
        )
    }
}
const mapStatToProps = (state) => {
    return{
        unit: state.unit,
        data: state.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        storeChartData: (chartData) => { dispatch({type:'STORE_CHART_DATA', chartData: chartData}) }

    }
}
export default connect(mapStatToProps, mapDispatchToProps)(CardComponent)