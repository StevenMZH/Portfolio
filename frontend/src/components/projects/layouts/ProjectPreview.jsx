import { memo } from "react";
import { motion } from "framer-motion";
import ProjectLinks from "../components/ProjectLinks";

function ProjectPreview({ mainImage, title, subtitle, description, links, priority = false }) {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
      <div className="card preview mobile">
        <img
          className="card-img"
          src={`projects/${mainImage}`}
          alt={name}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width="640"
          height="360"
        />

        <div className="card-description gap20">
          <div className="card-text column-left gap5">
            <div className="column-left">
              <h3 className="h4 text-main">{title}</h3>
              <p className="h5 text-mai keyword2">{subtitle}</p>
            </div>
            <p className="t-body6 text-hl3">{description}</p>
          </div>

          <ProjectLinks links={links} />
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectPreview);
