import { Tech } from "../components/Tech";
import Reveal from "../components/anims/Reveal";
import { techs } from "../data/techs";

export function Techs() {
  return (
    <section id="techs" className="section techs">
      <h2 className="h4 text-hl2 text-shadow" >Technologies</h2>

      <div className="stacks">
        {techs.map((stack) => (
          <Reveal key={stack.category}>
            <div className="stack">
              {stack.items.map((tech) => (
                <Tech
                  key={tech.name}
                  img={tech.img}
                  alt={tech.name}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Techs;
