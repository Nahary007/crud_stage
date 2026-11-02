
function Button({ texte, loading }) {
  return (
    <button type="submit" disabled={loading}>
      {loading ? "Envoi en cours..." : texte}
    </button>
  );
}

export default Button;

