import React, { useState } from "react";
import classes from './style.module.css'
import Slide1 from './../../public/assets/slide1.jpg'
import Slide2 from './../../public/assets/Slide2.jpg'
import Slide3 from './../../public/assets/Slide3.jpg'
import Slide4 from './../../public/assets/Slide4.jpg'
import Slide5 from './../../public/assets/Slide5.jpg'
import Login from "./Login";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].img}')`
			},
			panelStyle: {
				background: this.props.data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[id].img}')`
			},
			panelStyle: {
				backgroundColor: this.props.data[id].colour
			}
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	_autoChanger(){
		var i=0;
		if(i===5){
			i=0;
		}
		setInterval(this._changeActive(i++), 200);
	}
	
	render() {
		return (
			

			<section className={classes.wrapper} style={this.state.wrapperStyle}>
				<Selectors 
					data={this.props.data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel 
					data={this.props.data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</section>
			
		);
	}
}
class Panel extends React.Component {
	render() {
		return (
			<aside className={classes.panel} style={this.props.panelStyle}>
				<h2 className={classes['panel-header']}>{this.props.data.header}</h2>
				<p className={classes["panel-info"]}>{this.props.data.body}</p>
				{this.props.data.id===0 ? <div><Login val='Sign in'/>
				</div>:<div>
				</div>}
			</aside>
		);
	}
}
class Selectors extends React.Component {
	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<div className={classes.selectors}>
				{this.props.data.map((item) => 
					<Selector 
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}
class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		let componentClasss = '';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector';
			componentClasss = 'active';

		}
		return (
			<div className={`${classes[componentClasss]} ${classes[componentClass]}`} onClick={this.props._handleClick.bind(this)}></div>
		);
	}
}

const data = [{
	id: 0,
	header: 'Welcome to Accord',
	body: 'Connecting YOU to YOUR College',
	colour: 'rgba(0,0,0,0.8)',
	img: Slide1.src
}, {
	id: 1,
	header: 'Feel Yourself!',
	body: 'Spend Your Time with the people you vibe with!',
	colour: '#2a1538',
	img: Slide2.src
}, {
	id: 2,
	header: 'Ask within the community',
	body: 'Interact with the community in our forums!',
	colour: 'rgb(147,150,162,0.5)',
	img: Slide3.src
}, {
	id: 3,
	header: 'Build Stronger Relationships',
	body: "Build stronger bonds and networks with your Alumni's",
	colour: 'rgba(0,0,0,0.5)',
	img: Slide4.src
}, {
	id: 4,
	header: 'Follow your Passion',
	body: 'Find people who will help you follow your passion!',
	colour: 'rgb(51,56,78,0.5)',
	img: Slide5.src
}];

function Ren(){
    return <Home data={data}/>
}
export default Ren;
