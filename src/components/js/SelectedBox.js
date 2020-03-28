import React from 'react';
import '../css/SelectedBox.css';
import SelectedItem from './SelectedItem';


class SelectedBox extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.selectedItem !== nextProps.selectedItem;
    // }

    render() {
        // const { selectedIndex, geo, items, getDistanceFromLatLonInKm, handleRemove } = this.props;
        const { geo, selectedItem, getDistanceFromLatLonInKm, handleRemove } = this.props;

        // console.log(items);
        console.log(selectedItem);


        // 테스트.
        // const xxx = [
        //     {addr: "서울특별시 중구 을지로44길 20 (광희동1가)", code: "11837152", created_at: "2020/03/26 15:55:00"},
        //     {addr: "서울특별시 중구 동호로 376 (방산동)", code: "11849746", created_at: "2020/03/26 15:55:00"},
        //     {addr: "서울특별시 중구 을지로 251 1층 (을지로6가)", code: "12848735", created_at: "2020/03/26 15:55:00"}
        // ];
        // const yyy = xxx[0];
        // console.log(xxx);
        // console.log(yyy);
        // console.log(yyy.addr);

        // let selectedItem;
        // if(selectedIndex !== null) {
        //     const selectedList = (items[selectedIndex]);
        //     selectedItem = (
        //         <SelectedItem
        //             geo={geo}
        //             name={selectedList.name}
        //             addr={selectedList.addr}
        //             remain_stat={selectedList.remain_stat}
        //             stock_at={selectedList.stock_at}
        //             lat={selectedList.lat}
        //             lng={selectedList.lng}
        //             id={selectedIndex}
        //             key={selectedIndex}
        //             getDistanceFromLatLonInKm={getDistanceFromLatLonInKm} />
        //     );
        // }

        return (
            <div>
                <div
                    // className={`item-detail-overlay ${selectedItem !== null ? 'show' : ''}`}
                    className={`item-detail-overlay show`}
                    onClick={handleRemove}>
                </div>
                <div className={`item-detail show`}>
                    <SelectedItem
                        geo={geo}
                        name={selectedItem.name}
                        addr={selectedItem.addr}
                        remain_stat={selectedItem.remain_stat}
                        stock_at={selectedItem.stock_at}
                        lat={selectedItem.lat}
                        lng={selectedItem.lng}
                        id={selectedItem.code}
                        key={selectedItem.code}
                        getDistanceFromLatLonInKm={getDistanceFromLatLonInKm} />
                </div>
            </div>
        );
    }
}

export default SelectedBox;