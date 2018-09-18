import React from 'react';
import {  Modal} from 'reactstrap';

class ModalExample extends React.Component {
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
        <img  className="rounded m-3 w-75 position-relative " src={this.props.imgUrl} onClick={this.toggle} alt="img"/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <img className="rounded " style={{width:"700px",height:"500px"}}  src={this.props.imgUrl} alt="Imgs" />
        </Modal>
      </div>
    );
  }
}

export default ModalExample;