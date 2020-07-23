import React, { Component } from 'react';

const Clock = (props) => {
  return <span>{props.date.toLocaleTimeString()}</span>;
};

export default Clock;
