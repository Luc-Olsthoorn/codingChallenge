import React from 'react';
import './app.css';

class Row extends React.Component {
  	constructor(props){
	    super(props);
		
	}
	render(){
		let divStyle = {
		  padding:"10%",
		  "color":this.props.color,
		  display: "flow-root",
		  "text-align":"center"
		};
		//see if it is a color or an image background
		if(this.props.background.color){
			divStyle["background-color"] = this.props.background.color;
		}else{
			divStyle["background-image"] = this.props.background.image;
		}	
		const img ={
		  width: "100%",
		  "max-width":"600px"
		}
		let imageDiv ={};
		let textDiv = {"text-align": "left"};
		//see if image comes first or text
		if(this.props.orientation === "image"){
			imageDiv["float"] = "left";
			textDiv ["float"] = "right";
		}else{
			imageDiv["float"] = "right";
			textDiv ["float"] = "left";
		}
		
		return(
			<div style={divStyle}>
				<div className="innerElement" style={textDiv}>
					<h2 >{this.props.title}</h2>
					<p>{this.props.text}</p>
				</div>
				<div className="innerElement" style={imageDiv}>
					<img style={img} src={this.props.img}/> 
				</div>     
			</div> 
		)
	}
}
export {Row}