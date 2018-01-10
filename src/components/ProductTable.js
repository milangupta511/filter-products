import React from 'react';
import uuidv1 from 'uuid/v1';

import TableRow from './TableRow';
import TableHeader from './TableHeader';
import TableRowHeader from './TableRowHeader';
import TableRowData from './TableRowData';


const ProductTable = props => {
  let { data, removeFromCart, addToCart} = props,
    tableColumns = ['Name', 'Price'],
    dataByCategory = getDataByCategory(data);

  return (
    <div>
      <table>
        <thead>
          <TableRow>
            {tableColumns.map(column => <TableHeader>{column}</TableHeader>)}
          </TableRow>
        </thead>

        {props.data.length<=0? (<p> No items Found</p>): Object.keys(dataByCategory).map(category => {

          return (
            <tbody>
              <TableRowHeader colSpan={tableColumns.length}>
                {category}
              </TableRowHeader>

              {dataByCategory[category].map(item => (
                <TableRow key={item.id} stocked={item.stocked}>
                  <TableRowData>{item.name}</TableRowData>
                  <TableRowData>{item.price}</TableRowData>
                  <TableRowData>{item.stocked? item.isAddedToCart ? <span>Added | <a href="#" onClick={removeFromCart.bind(this, item.id)}>Remove from Cart</a> </span> : <a href="#" onClick={addToCart.bind(this, item.id)}>Add to Cart</a>:"Out of stock!" }</TableRowData>
                </TableRow>
              ))}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
const getDataByCategory = data => {
  return data.reduce((obj, item) => {
    obj[item.category] = obj[item.category] || [];
    obj[item.category].push(item);
    return obj;
  }, {});
};
export default ProductTable;
