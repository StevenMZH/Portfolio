import Reveal from "../components/anims/Reveal";
import { self } from "../data/self";
import renderHighlightedText from "../helpers/RenderHighlightedText";

export function About() {
  return (
    <section id="about" className="section about">
      <h2 className="h4 text-hl2 text-shadow">About Me</h2>

      <Reveal className="description">
        {self.aboutMe.map((aboutme, index) => (
          <p key={index} className="t-body2 text-hl3">
            {renderHighlightedText(aboutme, "keywords")}
          </p>
        ))}
      </Reveal>
    </section>
  );
}

export default About;

