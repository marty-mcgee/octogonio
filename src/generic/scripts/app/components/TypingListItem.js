import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TypingListItem = (props) => {
  const { username } = props;
  return (
    <span>
      {username}
    </span>
  );
}

TypingListItem.proptypes = {
  username: PropTypes.string.isRequired
}

export default TypingListItem;
