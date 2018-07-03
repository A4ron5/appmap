import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import { connect } from 'react-redux'

const mapState = { center: [55.76, 37.64], zoom: 7 };


class MapkaRaw extends React.PureComponent {

  map = null;
  ymaps = null;
  route = null;

  // componentWillReceiveProps(nextProps = '') {
  //   console.log(nextProps.routes)
  //   console.log(this.props.routes)
    
  //     this.ymaps
  //       .route(nextProps.routes)
  //       .then(route => {
  //         this.route = route;
  //         this.map.geoObjects.add(route);
  //       })
    
  // }

  componentDidUpdate(prevProps) {
    console.log(prevProps.routes)
    console.log(this.props.routes)
    
      this.ymaps
        .route(this.props.routes)
        .then(route => {
          this.route = route;
          this.map.geoObjects.add(route);
        })
    
  }

  handleApiAvaliable = ymaps => {
    this.ymaps = ymaps;
    ymaps
      .route(
        []
        ,
        {
          mapStateAutoApply: true
        }
      )
      .then(route => {
        this.map.geoObjects.add(route);
      });
  };


  render() {
    return (
      <YMaps onApiAvaliable={ymaps => this.handleApiAvaliable(ymaps)}>
        <Map width='600px' height='500px' state={mapState} instanceRef={ref => (this.map = ref)} />
      </YMaps>
    );
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes
  }
}

export const Mapka = connect(mapStateToProps)(MapkaRaw)
