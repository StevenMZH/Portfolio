import { self } from "../data/self";
import  {socials} from "../data/socials"
import renderHighlightedText from "../helpers/RenderHighlightedText";

export function Hero() {
  return (
    <section id="hero" className="flex section hero">
        <img
          src={self.image}
          alt="Steven Mendoza portrait"
          className="profile-img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="column gap30">
          <div className="column gap5">
            <h1 className="h1 text-hl2 text-shadow">{self.name}</h1>

            <div className="column center">
              {self.title.map((line) => (
                <h2 key={line} className="h2 text-hl2">{line}
                </h2>
              ))}
            </div>
          </div>
          
          <div className="column gap20">
            <p className="t-body4 text-hl2">{renderHighlightedText(self.description, "keywords")}</p>

            <div className="full-w gap30 row center hero-socials">   
              {socials.map((social) => (
                <a href={social.url} className="social" key={social.name} rel="noopener noreferrer">
                  <img src={`socials/${social.img}`} alt={social.name} className="icon-inverter"/>
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
export default Hero;
