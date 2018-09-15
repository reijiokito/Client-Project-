import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import GymRoomInfo from '../container/GymRoomInfo';
const { compose, withProps,withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  BicyclingLayer
} = require("react-google-maps");



const MapWithABicyclingLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
    
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>

  <GoogleMap
    defaultZoom={12}
    defaultCenter= {props.address}
  >

    <Marker
      position={props.address}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <GymRoomInfo info={props.info} />
      </InfoWindow>}
    </Marker>

    <BicyclingLayer autoUpdate />
  </GoogleMap>

);

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {    
    
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>View Address </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{maxWidth:'800px',display:'block',height:'700px'}}>          
          <ModalHeader toggle={this.toggle}>{this.props.info.name}</ModalHeader>
          <ModalBody >
            <MapWithABicyclingLayer info={this.props.info} address={this.props.address}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          
        </Modal>
      </div>
    );
  }
}



export default ModalExample;