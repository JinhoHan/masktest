import React from 'react';
import Template from './components/js/Template';
import ItemList from './components/js/ItemList';
import SelectedBox from './components/js/SelectedBox';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			geo: [],
			items: [],
			// selectedIndex: null
			selectedItem : null
		}
	}

	componentDidMount() {
		this.getGeolocation();
	}

	getGeolocation() {
		if (!navigator.geolocation) {
			alert("현재위치찾기를 지원하지 않는 브라우저 입니다. 혹은 설정에서 위치정보 접근 권한을 허용해주세요");
		} else {
			navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError);
		}
	}

	handleError = (error) => {
		console.log(error.code);
		alert("현재위치를 받아오는데 실패했습니다");
	}

	handleSuccess = (position) => {
		const geo = [position.coords.latitude, position.coords.longitude];
		const latitude = geo[0];
		const longitude = geo[1];
		console.log(latitude + " ::: " + longitude);
		this.setState({ geo: geo });

		const url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=" + latitude + "&lng=" + longitude + "&m=1000";
		// console.log(url);

		fetch(url)
			.then(res => {
				if (!res.ok) {
					throw new Error(res.status);
				}
				return res.json();
			})
			// .then(mask => console.log(mask.stores))
			.then(mask => this.setState({ items: mask.stores }))		// this.setState 가 계속 에러나서... let self = this; 를 받고 this 대신에 self 사용.
			.catch(err => console.log(err))
	}

	getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
		const R = 6371; // Radius of the earth in km
		const dLat = this.getDegreesToRadians(lat2 - lat1);  // degreesToRadians below
		const dLon = this.getDegreesToRadians(lng2 - lng1);
		const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.getDegreesToRadians(lat1)) * Math.cos(this.getDegreesToRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		let d = R * c; // Distance in km
		d = d.toFixed(2);
		return d;
	}

	getDegreesToRadians = (deg) => {
		return deg * (Math.PI / 180);
	}

	handleClick = (item) => {
		console.log(item);
		this.setState({ selectedItem: item });
	}

	handleRemove = () => {
		this.setState({ selectedItem: null });
	}

	render() {
		// console.log(this.state.items);
		return (
			<Template>
				<ItemList
					geo={this.state.geo}
					items={this.state.items}
					getDistanceFromLatLonInKm={this.getDistanceFromLatLonInKm}
					handleClick={this.handleClick} />
				{this.state.selectedItem && <SelectedBox
												geo={this.state.geo}
												selectedItem={this.state.selectedItem}
												getDistanceFromLatLonInKm={this.getDistanceFromLatLonInKm}
												// selectedIndex={this.state.selectedIndex}
												handleRemove={this.handleRemove} />
				}
			</Template>
		);
	}
}


export default App;