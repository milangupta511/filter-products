import React from 'react';

import TableHeader from './TableHeader';

const TableRowHeader = (props) => {
  return <TableHeader {...props} >{props.children}</TableHeader>
};
export default TableRowHeader;
