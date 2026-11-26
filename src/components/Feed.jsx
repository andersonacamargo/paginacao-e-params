function Feed({ feed }) {
    return (
        <article>
            <h2>{feed.titulo}</h2>

            <p>{feed.conteudo}</p>

            <small>
                Publicado em:{" "}
                {new Date(feed.data).toLocaleString("pt-BR")}
            </small>
        </article>
    );
}

export default Feed;