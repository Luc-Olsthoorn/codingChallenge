import React from 'react';
import './app.css';
import {Slide} from './Slide.js';
import {slides} from './config.js';
//Displays all the slides, found in config.js
class Slider extends React.Component {
  	constructor(props){
	    super(props);
	    this.state ={
	    	index:0
	    }
		this.left = this.left.bind(this);
		this.right = this.right.bind(this);
	}
	left(){
		//goes in a loop
		if(this.state.index>0){
			this.setState({
				index: this.state.index-1
			});
		}else{
			this.setState({
				index: slides.length-1
			});
		}
		
	}
	right(){
		//goes in a loop
		if(this.state.index<slides.length-1){
			this.setState({
				index: this.state.index+1
			});
		}else{
			this.setState({
				index: 0
			});
		}
	}
	render(){
		const mainWrapper = {
			position:"relative",
	        "overflow":"hidden" 
		};
		let slide = slides[this.state.index];
		return(

			<div style={mainWrapper}>
		        <Slide imgURL={slide.imgURL} text ={slide.text} title = {slide.title} left={this.left} right={this.right} />
      		</div>    
		)
	}
}
export {Slider}