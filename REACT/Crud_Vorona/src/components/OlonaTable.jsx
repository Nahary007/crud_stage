import OlonaRow from "./OlonaRow";

function OlonaTable({ olonas, onDelete }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Nom</th>
          <th style={styles.th}>Prénom</th>
          <th style={styles.th}>Action</th>
        </tr>
      </thead>
      <tbody>
        {olonas.map((olona) => (
          <OlonaRow key={olona.id} olona={olona} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ddd",
    color: "#555",
    fontSize: "14px",
  },
};

export default OlonaTable;
