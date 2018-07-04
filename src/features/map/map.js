import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import { connect } from 'react-redux'

const mapState = { center: [55.76, 37.64], zoom: 7 };

class MapkaRaw extends React.PureComponent {

  map = null;
  ymaps = null;

  componentDidUpdate(prevProps) {
    if(prevProps.routes.length < this.props.routes.length) { //добавление на карту
      this.ymaps
        .route(this.props.routes)
        .then(route => {
          this.map.geoObjects.add(route);
        })
    }
    if(prevProps.routes.length > this.props.routes.length) { //удаление с карты
      const removedRoute = prevProps.routes.filter(route => !this.props.routes.includes(route))[0]
      const indexRemovedRoute = prevProps.routes.indexOf(removedRoute);
      let geoObjectRemoveRoute = this.map.geoObjects.get(indexRemovedRoute-1)
      this.map.geoObjects.remove(geoObjectRemoveRoute);
    }
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
    routes: state.input.routes
  }
}

export const Mapka = connect(mapStateToProps)(MapkaRaw)
