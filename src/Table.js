import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (data) => {
  const rows = data.tableBodyData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button onClick={() => data.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const bodyData = props.characterData;
  const removeMethod = props.remove; // method to remove table rows

  return (
    <table>
      <TableHeader />
      <TableBody removeCharacter={removeMethod} tableBodyData={bodyData} />
    </table>
  );
};

export default Table;
