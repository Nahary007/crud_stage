import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { olonaService } from "../services/olonaService";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ nom: "", prenom: "" });
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const charger = async () => {
            try {
                const data = await olonaService.obtenirParId(id);
                setFormData({ nom: data.nom, prenom: data.prenom });
            } catch (err) {
                setError(err.message);
            }
        };

        charger();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            await olonaService.modifier(id, formData.nom, formData.prenom);
            setMessage("✅ Olona modifié avec succès !");
            setTimeout(() => navigate("/olona"), 1000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Modifier un Olona</h2>

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
                <Button texte="Modifier" loading={loading} />
            </form>

            {message && <p>{message}</p>}
            <ErrorMessage message={error} />
        </div>
    );
}

export default Update;
