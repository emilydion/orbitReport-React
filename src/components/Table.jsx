import styles from "./styling.css"
const Table = ({ sat }) => {
  let satData = sat.map((data) => (
    <>
      <tr key={data.id}>
        <td key={data.id}>{data.name}</td>
        <td key={data.id}>{data.type}</td>
        <td key={data.id}>{data.launchDate}</td>
        <td key={data.id}>{data.operational ? "Active" : "Inactive"}</td>
      </tr>
    </>
  ));

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {satData}
     </tbody>
   </table>
  );
};

export default Table;