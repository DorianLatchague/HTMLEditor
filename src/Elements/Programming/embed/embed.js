import React from 'react';
import './embed.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function embed(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<embed {...attributes} onClick={selectNode}>{children}</embed>);
}

export default connect(null, {selectNode})(embed);