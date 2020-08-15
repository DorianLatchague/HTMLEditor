import React from 'react';
import './dialog.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function dialog(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<dialog {...attributes} onClick={selectNode}>{children}</dialog>);
}

export default connect(null, {selectNode})(dialog);