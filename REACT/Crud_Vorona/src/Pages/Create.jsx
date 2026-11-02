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
      const response = await fetch("http://localhost:3001/olona", {
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
    <div>
      <h2>Créer un Olona</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez le nom"
            required
          />
        </div>

        <div>
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez le prénom"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Créer"}
        </button>
      </form>

      {/* Messages de retour */}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Create;
