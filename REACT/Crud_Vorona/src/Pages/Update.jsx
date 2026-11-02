import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";

const API = "http://localhost:3001";

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Charger les valeurs actuelles pour préremplir le formulaire
    useEffect(() => {
        const charger = async () => {
            try {
                const response = await fetch(`${API}/olona/${id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.erreur || `Erreur serveur : ${response.status}`);
                }

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
            const response = await fetch(`${API}/olona/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.erreur || `Erreur serveur : ${response.status}`);
            }

            setMessage("Utilisateur modifié avec succès !");
            setTimeout(() => navigate("/olona"), 1000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Modifier un utilisateur</h2>

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

            {message && <p style={{ color: "#16a34a", fontWeight: "600" }}>{message}</p>}
            <ErrorMessage message={error} />
        </div>
    );
}

export default Update;