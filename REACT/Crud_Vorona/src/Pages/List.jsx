import { useEffect, useState } from "react";
import OlonaTable from "../components/OlonaTable";
import ErrorMessage from "../components/ErrorMessage";

const API_URL = "http://localhost:3001/olona";

function List() {
  const [olonas, setOlonas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const chargerOlonas = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }
      const data = await response.json();
      setOlonas(data);
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chargerOlonas();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet olona ?")) return;

    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }
      setOlonas(olonas.filter((o) => o.id !== id));
    } catch (err) {
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Liste des Olona</h2>

      <ErrorMessage message={error} />
      {loading && <p>Chargement...</p>}
      {!loading && olonas.length === 0 && <p>Aucun olona pour le moment.</p>}
      {olonas.length > 0 && (
        <OlonaTable olonas={olonas} onDelete={handleDelete} />
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
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
};

export default List;
