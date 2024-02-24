import './Footer.css';

function Footer() {
  console.log(Footer);
  return (
    <div className="Footer">

      <div className="LinkedIn">
        <a href="https://www.linkedin.com/in/dennis-wynn-bkny22/"><img className="footer-icon" src="./LinkedIn.svg" /></a>
      </div>

      <div className="GitHub">
        <a href="https://github.com/denniswynn22"><img className="footer-icon" src="./GitHub.svg" /></a>
      </div>

    </div>
  );
}

export default Footer;
