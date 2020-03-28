import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.items !== nextProps.items;
	// }

    render() {
        // console.log(this.props);
        const { geo, items, getDistanceFromLatLonInKm, handleClick } = this.props;

        // console.log(items);

        const itemList = items.map (
            // ({ name, addr, remain_stat, stock_at, lat, lng }, index) => (
            // ({ code, name, addr, remain_stat, stock_at, lat, lng }) => (
            //     <Item
            //         geo={geo}
            //         name={name}
            //         addr={addr}
            //         remain_stat={remain_stat}
            //         stock_at={stock_at}
            //         lat={lat}
            //         lng={lng}
            //         // id={index}
            //         // key={index}
            //         id={code}
            //         key={code}
            //         getDistanceFromLatLonInKm={getDistanceFromLatLonInKm}
            //         handleClick={handleClick} />
            // )
            
            ( item ) => (
                <Item
                    geo={geo}
                    item={item}
                    key={item.code}
                    getDistanceFromLatLonInKm={getDistanceFromLatLonInKm}
                    handleClick={handleClick} />
            )
        )

        return (
            <div>
                {itemList}
            </div>
        );
    }
}

export default ItemList;