import { socials } from "../data/socials";
import { self } from "../data/self"

export function Footer() {
  return (
    <footer id="socials" className="column gap10">

        <div className="full-w gap20 row center presentation-socials">   
          {socials.map((social) => (
            <a href={social.url} className="social" key={social.name} rel="noopener noreferrer">
              <img src={`socials/${social.img}`} alt={social.name} className="icon-inverter"/>
            </a>
          ))}
        </div>

        <div className="column center">
          <p className="t-body4 text-hl2">{self.footer}</p>
        </div>

    </footer>
  );
}
export default Footer;
