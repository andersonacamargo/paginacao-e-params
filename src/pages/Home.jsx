
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { listarFeeds } from "../database/db";

function Home() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const carregarFeeds = async () => {
      try {
        console.log("carregando feed")
        const dados = await listarFeeds();
        setFeeds(dados);
        console.log("carregando feed")

      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    };

    carregarFeeds();
  }, []);

  if (loading) {
    return (<div>carregando</div>)
  }

  if (error) {
    return (<div>erro</div>)
  }
  return (
    <main>
      <h1>Página inicial</h1>

      <Link to="/feed/novo">
        Criar novo Feed
      </Link>

      <hr />

      <h2>Publicações</h2>

      {feeds.length === 0 && (
        <p>Nenhum feed cadastrado.</p>
      )}

      {(feeds.map((feed) => (
        <article key={feed.id}>
          <h3>{feed.titulo}</h3>

          <p>{feed.conteudo}</p>

          <Link to={`/feed/${feed.id}`}>
            Ver publicação
          </Link>
        </article>
      )))

      }
    </main>
  );
}

export default Home;