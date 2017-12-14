import React from 'react';

const TableRow = (props) => {
  let style = {
    color: props.stocked? "black": "red"
  };
  return <tr style={style}>{props.children}</tr>;
};
export default TableRow;
