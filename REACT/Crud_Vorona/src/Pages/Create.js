import { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/olona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }

      const data = await response.json();
      setMessage(`✅ Olona créé avec succès ! ID : ${data.id}`);
      setFormData({ nom: "", prenom: "" }); 
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Créer un Olona</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="nom" style={styles.label}>
            Nom
          </label>
          <input
            id="nom"
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez le nom"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="prenom" style={styles.label}>
            Prénom
          </label>
          <input
            id="prenom"
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez le prénom"
            required
            style={styles.input}
          />
        </div>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Envoi en cours..." : "Créer"}
        </button>
      </form>

      {/* Messages de retour */}
      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

// Styles inline simples
const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontWeight: "600",
    color: "#555",
    fontSize: "14px",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
  },
  success: {
    marginTop: "16px",
    color: "#16a34a",
    fontWeight: "600",
  },
  error: {
    marginTop: "16px",
    color: "#dc2626",
    fontWeight: "600",
  },
};

export default Create;
