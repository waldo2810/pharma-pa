const Table = ({ title, headers, data }) => {
  return (
    <div>
      <h4>{title}</h4>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <td>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
