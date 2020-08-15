import React from 'react';
import './input.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function input(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<input {...attributes} onClick={selectNode}/>);
}

export default connect(null, {selectNode})(input);