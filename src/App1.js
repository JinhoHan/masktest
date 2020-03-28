import React from 'react';
import Template from './components/js/Template';
import ItemList from './components/js/ItemList';




class App extends React.Component {
   constructor(props) {
      super(props);
      // this.state = {
      //    items : [
      //          {
      //             "addr": "서울특별시 종로구 수표로 92 (관수동)",
      //             "code": "11831065",
      //             "created_at": "2020/03/23 17:30:00",
      //             "lat": 37.5694031,
      //             "lng": 126.9896544,
      //             "name": "삼보약국",
      //             "remain_stat": "empty",
      //             "stock_at": "2020/03/23 11:30:00",
      //             "type": "01"
      //          }, {
      //             "addr": "서울특별시 종로구 종로 115 403호 (종로3가, 낙원빌딩)",
      //             "code": "12838942",
      //             "created_at": "2020/03/23 17:30:00",
      //             "lat": 37.5706126,
      //             "lng": 126.990473,
      //             "name": "미소약국",
      //             "remain_stat": "break",
      //             "stock_at": "2020/03/23 09:16:00",
      //             "type": "01"
      //          }, {
      //             "addr": "서울특별시 종로구 수표로 115 1층 (낙원동)",
      //             "code": "11831278",
      //             "created_at": null,
      //             "lat": 37.5715523,
      //             "lng": 126.9890666,
      //             "name": "성당약국",
      //             "remain_stat": null,
      //             "stock_at": null,
      //             "type": "01"
      //          }
      //       ]
      // }

      this.state = {
         items: []
      }

      this.getList = this.getList.bind(this);
   }

   componentDidMount() {
      this.getList();
   }

   getList() {
      let self = this;      // 추가..

      function success(position) {
         const geo = [position.coords.latitude, position.coords.longitude];
         const latitude = geo[0];
         const longitude = geo[1];
         console.log(latitude + " ::: " + longitude);
         
         var url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=" + latitude + "&lng=" + longitude + "&m=1000";
         // console.log(url);

         fetch(url)
            .then(res => {
               if(!res.ok) {
                  throw new Error(res.status);
               }
               return res.json();
            })
            .then(mask => self.setState({items : mask.stores}))      // this.setState 가 계속 에러나서... let self = this; 를 받고 this 대신에 self 사용.
            .catch(err => console.log(err))
      }

      function error(error) {
         console.log(error.code);
         alert("현재위치를 받아오는데 실패했습니다");
      }


      if(!navigator.geolocation) {
         alert("현재위치찾기를 지원하지 않는 브라우저 입니다. 혹은 설정에서 위치정보 접근 권한을 허용해주세요");
      } else {
         navigator.geolocation.getCurrentPosition(success, error);
      }




   }

   render() {
      // console.log(this.state.items);
      return (
         <Template>
            <ItemList items={this.state.items} />
         </Template>
      );
   }
}


export default App;