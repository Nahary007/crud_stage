import { useState } from "react";
import { olonaService } from "../services/olonaService";
import InputField from "./InputField";
import Button from "./Button";

function CreateForm() {
  const [formData, setFormData] = useState({ nom: "", prenom: "" });
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
      const data = await olonaService.creer(formData.nom, formData.prenom);
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
        <InputField
          id="nom"
          label="Nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Entrez le nom"
        />
        <InputField
          id="prenom"
          label="Prénom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Entrez le prénom"
        />
        <Button texte="Créer" loading={loading} />
      </form>

      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CreateForm;
