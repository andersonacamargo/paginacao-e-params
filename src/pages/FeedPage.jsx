import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { buscarFeed } from "../database/db";
import Feed from "../components/Feed";

function FeedPage() {
  const { id } = useParams();

  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarFeed = async () => {
      try {
        const resultado = await buscarFeed(id);
        setFeed(resultado);
      } catch (error) {
        console.error("Erro ao buscar feed:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarFeed();
  }, [id]);

  if (loading) {
    return <p>Carregando feed...</p>;
  }

  if (!feed) {
    return (
      <main>
        <h1>Feed não encontrado!</h1>
        <Link to="/">Voltar</Link>
      </main>
    );
  }

  return (
    <main>
      <Feed feed={feed} />

      <Link to="/">Voltar para o início</Link>
    </main>
  );
}

export default FeedPage;