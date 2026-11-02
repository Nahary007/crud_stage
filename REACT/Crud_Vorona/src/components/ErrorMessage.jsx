function ErrorMessage({ message }) {
  if (!message) return null;

  return <p style={styles.error}>{message}</p>;
}

const styles = {
  error: {
    color: "#dc2626",
    fontWeight: "600",
  },
};

export default ErrorMessage;
