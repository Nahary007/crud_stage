function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} style={styles.button}>
      Supprimer
    </button>
  );
}

const styles = {
  button: {
    padding: "6px 12px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default DeleteButton;
