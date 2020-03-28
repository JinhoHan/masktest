/*global kakao*/
import React from 'react';

import '../css/SelectedItem.css';
import { Card, CardTitle } from 'reactstrap';

class SelectedItem extends React.Component {
    constructor(props) {
        super(props);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.id !== nextProps.id;
    // }

    componentDidMount() {

        const { lat, lng, remain_stat } = this.props;

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            // center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다 
        // var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
        var markerPosition  = new kakao.maps.LatLng(lat, lng);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        // var xxx = remain_stat === 'plenty' ? ' 100개 이상' :
        //             (remain_stat === 'some' ? ' 30개 이상 100개미만' :
        //                 (remain_stat === 'few' ? ' 2개 이상 30개 미만' :
        //                     (remain_stat === 'empty' ? ' 1개 이하' : ' 판매중지')));
        // var iwContent = '<div style="padding:5px;">' + xxx + '</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        //     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // // 인포윈도우를 생성합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //     content : iwContent,
        //     removable : iwRemoveable
        // });

        // // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function() {
        //     // 마커 위에 인포윈도우를 표시합니다
        //     infowindow.open(map, marker);  
        // });
    }

    render() {
        const { id, geo, name, addr, remain_stat, stock_at, lat, lng, getDistanceFromLatLonInKm } = this.props;

        return (
            <div className={`card-item`} >
                <Card className={`innerbody selected-item`}>
                    <CardTitle className={`mask_name`}>{name}</CardTitle>

                    <CardTitle className="distance selected-item">{getDistanceFromLatLonInKm(geo[0], geo[1], lat, lng)} km</CardTitle>

                    <CardTitle className={`mask_addr `}>{addr}</CardTitle>

                    <CardTitle className={`mask_remain`}>
                        <div className={`mask_remain_color`}></div>
                        <div className="mask_remain_text">
                            재고 :
                                {remain_stat === 'plenty' ? ' 100개 이상' :
                                (remain_stat === 'some' ? ' 30개 이상 100개미만' :
                                    (remain_stat === 'few' ? ' 2개 이상 30개 미만' :
                                        (remain_stat === 'empty' ? ' 1개 이하' : ' 판매중지')))}
                        </div>
                    </CardTitle>

                    <CardTitle className={`mask_stock`}>
                        입고시간 : {stock_at === null ? '입고정보없음' : stock_at}
                    </CardTitle>
                </Card>
                <Card id="map" className="kakao_map">xxx</Card>
            </div>
        );
    }
}

export default SelectedItem;