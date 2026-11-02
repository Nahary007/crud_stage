import { useEffect, useState } from "react";
import { olonaService } from "../services/olonaService";
import OlonaTable from "../components/OlonaTable";
import ErrorMessage from "../components/ErrorMessage";

function List() {
  const [olonas, setOlonas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const chargerOlonas = async () => {
    try {
      const data = await olonaService.listerTous();
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
      await olonaService.supprimer(id);
      setOlonas(olonas.filter((o) => o.id !== id));
    } catch (err) {
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Liste des Olona</h2>

      <ErrorMessage message={error} />
      {loading && <p>Chargement...</p>}
      {!loading && olonas.length === 0 && <p>Aucun olona pour le moment.</p>}
      {olonas.length > 0 && (
        <OlonaTable olonas={olonas} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default List;
