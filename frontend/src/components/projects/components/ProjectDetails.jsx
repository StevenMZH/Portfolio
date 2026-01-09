import { useState } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

export function Project({
  mainImg,
  title,
  subtitle,
  description,
  images = [],
  stack = [],
  problemAnalisis = null,
  architecture = null,
  links = {},
  tags = [],
}) {
  const [section, setSection] = useState("summary");
  const selectSection = (next) => setSection(next);

  const hasStack = stack && stack.length > 0;
  const hasTags = stack && tags.length > 0;
  
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="full-w column center"
      key="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Content */}
      {section === "summary" && (
        <div className="project-box full-w column center gap30">

          <ImageCarousel mainImg={mainImg} images={images} />

          <div className="project-description column gap10">
              {/* Title & Description */}
              <div className="column-left full-w gap10">
                <div className="full-w row gap20">
                  <div className="column-left">
                    <h3 className="h3 text-hl">{title}</h3>
                    <p className="h4 text-hl">{subtitle}</p>
                  </div>

            
                  {/* Links */}
                  <div className="flex gap10 row">
                    {Object.entries(links).map(([type, url]) => (
                      <button
                        key={type}
                        type="button"
                        className="t-body3 project-link"
                        onClick={() => openLink(url)}
                        title={url}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  
                </div>
                <p className="t-body3 text-hl3">{description}</p>
              </div>
            
              <div className="full-w row-left gap20 align">
                {/* Tags */}
                {hasTags && (
                  <div className="project-tags row">
                    {tags.map((tag) => (
                      <p className="tag" key={tag}>{tag}</p>
                    ))}
                  </div>
                )}

                {/* Stack */}
                {hasStack && (
                  <div className="project-stack row">
                    {stack.map((tech) => (
                      <div key={tech.name}>
                        <img src={tech.img} alt={tech.name} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

  

          </div>
      </div>
      )}

      {/* Section Selector */}
      {(problemAnalisis || architecture) && (
        <div className="project-nav">
          <button
            type="button"
            className={`project-nav-option ${section === "summary" ? "selected" : ""}`}
            onClick={() => selectSection("summary")}
          >
            <p className="t-body6">Project Summary</p>
            <img src="icons/images.svg" alt="images" className="icon-inverter" />
          </button>

          {problemAnalisis && (
            <button
              type="button"
              className={`project-nav-option ${section === "analysis" ? "selected" : ""}`}
              onClick={() => selectSection("analysis")}
            >
              <p className="t-body6">Problem Analysis</p>
              <img src="icons/analysis.svg" alt="problem analysis" />
            </button>
          )}

          {architecture && (
            <button
              type="button"
              className={`project-nav-option ${section === "architecture" ? "selected" : ""}`}
              onClick={() => selectSection("architecture")}
            >
              <p className="t-body6">Architecture & Design</p>
              <img src="icons/architecture.svg" alt="architecture" />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default Project;
