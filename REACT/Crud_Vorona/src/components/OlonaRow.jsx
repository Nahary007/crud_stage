import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function OlonaRow({ olona, onDelete }) {
  return (
    <tr>
      <td style={styles.td}>{olona.id}</td>
      <td style={styles.td}>{olona.nom}</td>
      <td style={styles.td}>{olona.prenom}</td>
      <td style={styles.td}>
        <Link to={`/olona/modifier/${olona.id}`} style={styles.editBtn}>
          Modifier
        </Link>
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
  editBtn: {
    marginRight: "8px",
    padding: "4px 10px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default OlonaRow;
