import { useParams, Link } from "react-router-dom";
import Feed from "../components/Feed";

function FeedPage() {
  const { id } = useParams();

  return (
    <main>
      <h1>Página de Feed</h1>

      <p>Identificador recebido: {id}</p>

      <Feed id={id} />

      <Link to="/">
        Voltar para o início
      </Link>
    </main>
  );
}

export default FeedPage;   