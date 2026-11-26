import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { salvarFeed } from "../database/db";

function CreateFeed() {
    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");

    const navigate = useNavigate();

    const criarFeed = async (e) => {
        e.preventDefault();

        if (!titulo.trim() || !conteudo.trim()) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const id = await salvarFeed({
                titulo,
                conteudo,
            });

            navigate(`/feed/${id}`);

        } catch (error) {
            console.error("Erro ao salvar feed:", error);
            alert("Não foi possível salvar o feed.");
        }
    };

    return (
        <main>
            <h1>Criar novo Feed</h1>

            <form onSubmit={criarFeed}>
                <div>
                    <label>Título:</label>

                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título"
                    />
                </div>

                <div>
                    <label>Conteúdo:</label>

                    <textarea
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        placeholder="O que deseja publicar?"
                    />
                </div>

                <button type="submit">
                    Publicar Feed
                </button>
            </form>

            <Link to="/">Voltar</Link>
        </main>
    );
}

export default CreateFeed;