import React, { Component } from 'react';
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const google = window.google;
const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
);




// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
// } = require("react-google-maps");
// const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");
// const PlacesWithStandaloneSearchBox = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//   }),
//   lifecycle({
//     componentWillMount() {
//       const refs = {}
//       this.setState({
//         places: [],
//         onSearchBoxMounted: ref => {
//           refs.searchBox = ref;
//         },
//         onPlacesChanged: () => {
//           const places = refs.searchBox.getPlaces();
//           this.setState({
//             places,
//           });
//         },
//       })
//     },
//   }),
//   withScriptjs  
// )(props =>
//   <div data-standalone-searchbox="">
//     <StandaloneSearchBox
//       ref={props.onSearchBoxMounted}
//       bounds={props.bounds}
//       onPlacesChanged={props.onPlacesChanged}
//     >
//       <input
//         type="text"
//         placeholder="Customized your placeholder"
//         style={{
//           boxSizing: `border-box`,
//           border: `1px solid transparent`,
//           width: `240px`,
//           height: `32px`,
//           padding: `0 12px`,
//           borderRadius: `3px`,
//           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//           fontSize: `14px`,
//           outline: `none`,
//           textOverflow: `ellipses`,
//         }}
//       />
//     </StandaloneSearchBox>
//     <ol>
//       {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
//         <li key={place_id}>
//           {formatted_address}
//           {" at "}
//           ({location.lat()}, {location.lng()})
//         </li>
//       )}
//     </ol>
//   </div>
// );
class SearchBox extends Component{
    render(){
        return(
            <MapWithADrawingManager />
        );
    }
}

export default SearchBox;