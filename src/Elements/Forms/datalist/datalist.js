import React from 'react';
import './datalist.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function datalist(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<datalist {...attributes} onClick={selectNode}>{children}</datalist>);
}

export default connect(null, {selectNode})(datalist);