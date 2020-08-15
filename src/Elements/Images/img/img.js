import React from 'react';
import './img.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function img(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<img {...attributes} onClick={selectNode}/>);
}

export default connect(null, {selectNode})(img);