import React from 'react';
import './footer.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function footer(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<footer {...attributes} onClick={selectNode}>{children}</footer>);
}

export default connect(null, {selectNode})(footer);