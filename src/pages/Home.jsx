import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Página inicial</h1>

      <p>Bem-vindo ao sistema!</p>

      <nav>
        <Link to="/feed/1">
          Feed 1
        </Link>

        <br />

        <Link to="/feed/2">
          Feed 2
        </Link>

        <br />

        <Link to="/feed/3">
          Feed 3
        </Link>
      </nav>
    </main>
  );
}

export default Home;