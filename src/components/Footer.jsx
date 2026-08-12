export default Footer;

function Footer({ link }) {
  return (
    <footer className="footer-container">
      <h3>Created by: Alejandro Viejo</h3>
      <p>
        <a href={link}>Portfolio Site</a>
      </p>
      <p>Powered by: ChatGPT</p>
    </footer>
  );
}
