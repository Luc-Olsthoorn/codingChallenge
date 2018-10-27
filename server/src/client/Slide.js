import React from 'react';
import './app.css';
import arrow from'./arrow.png';

class Slide extends React.Component {
  	constructor(props){
	    super(props);
		
	}
	render(){

		const blurIMG ={
			"width":"100%",
			filter:"blur(12px) brightness(75%)",
			"background-image": "url('"+this.props.imgURL+"') ",
			height: "400px",
			transform: "scale(1.1)",
			"background-size": "cover"
		};
		const overlay ={
			"padding-left":"20%",
			"padding-right":"20%",
			position: "absolute",
			top: "0px",
			left: "0px",
			color: "white"
		};
		const arrowLeft ={    
			position: "absolute",
			top:"175px",
			"left":"5%",
			width: "50px",
			transform: "rotate(180deg)"
		};
		const arrowRight =  {   
			position: "absolute",
			top:"175px",
			right:"5%",
			width: "50px",
		};
		const innerImage = {
			float:"left", 
			"padding-right":"5%",
		 	"max-width":"400px",
		 	"max-height":"300px",
		 	"padding-top":"50px"
		};
		const button = {
			"background-color": "#9E9E9E",
			border: "none",
			color: "white",
			padding: "15px 32px",
			"text-align": "center",
			"text-decoration": "none",
			display: "inline-block",
			"font-size": "16px"
		};
		const buttonInverted = {
			"background-color": "transparent",
			border: "white",
			"border-style": "solid",
			"border-width":" 1px",
			color: "white",
			padding: "14px 32px",
			"text-align": "center",
			"text-decoration": "none",
			display: "inline-block",
			"font-size": "16px"
		};
		const mainText = {
			position: "relative",
			top: "50%",
			transform: "translateY(25%)"
		};
		return(
			<div>
				<div style={blurIMG}></div>
				<div style={overlay}>
					<img style={arrowLeft} src={arrow} onClick={()=>this.props.left()}/> 
					<img style={innerImage} className = "smallScreenDissapear" src={this.props.imgURL}/> 
					<div style={mainText}>
						<h1 style={{ "text-align": "left"}} >{this.props.title}</h1>
						<p style={{ "text-align": "left"}}>{this.props.text}</p>
						<button style={button}>Buy Now</button>
						<button style={buttonInverted}>Watch Trailer</button>
					</div>
					<img style={arrowRight} src={arrow} onClick={()=>this.props.right()}/> 
		    	</div> 
	    	</div>
		)
	}
}
export {Slide}