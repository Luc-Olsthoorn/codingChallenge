import React, { Component } from 'react';
import './app.css';
import {Row} from './row.js';
import {Slider} from './Slider.js';
import {rows} from './config.js';
class App extends React.Component  {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      {rows.map((val,key)=>
        <Row key={key} title={val.title} img={val.imgURL} color={val.color} background={val.background} text={val.text} orientation={val.orientation}/>
      )}
      <Slider /> 
      </div>

    );
  }
}
export {App}
