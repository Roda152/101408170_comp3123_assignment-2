import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => <th key={index}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => <td key={colIndex}>{row[col]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
