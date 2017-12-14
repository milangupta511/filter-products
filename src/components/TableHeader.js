import React from 'react';

const TableHeader = (props) => {
  return <th {...props}>{props.children}</th>;
};
export default TableHeader;
