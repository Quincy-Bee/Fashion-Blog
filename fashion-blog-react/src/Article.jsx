function Article({date, title, image}) {
  return (
    <article>

      <p>{date}</p>

      <h2>{title}</h2>

      <img src={image} alt={title} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Velit ducimus aut amet eum sunt nemo autem eligendi
        aspernatur deserunt facilis in dolor quia quo eos
        voluptatum labore.
      </p>

      <a className="continue" href="#">
        continues...
      </a>

    </article>
  );
}

export default Article;