import DeleteButton from "./DeleteButton";

function OlonaRow({ olona, onDelete }) {
  return (
    <tr>
      <td style={styles.td}>{olona.id}</td>
      <td style={styles.td}>{olona.nom}</td>
      <td style={styles.td}>{olona.prenom}</td>
      <td style={styles.td}>
        <DeleteButton onClick={() => onDelete(olona.id)} />
      </td>
    </tr>
  );
}

const styles = {
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    color: "#333",
  },
};

export default OlonaRow;
