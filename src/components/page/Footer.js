import "./styles/footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="copyright text-center p-3">
        © 2020 Copyright:{" "}
        <a
          href="https://www.instagram.com/anthonbakery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthon Pluton
        </a>
      </div>
      <div className="designBy">
        <p>
          Desing by:{" "}
          <a
            href="https://www.instagram.com/alan_deniz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alan Deniz
          </a>
        </p>
      </div>
    </footer>
  );
};
