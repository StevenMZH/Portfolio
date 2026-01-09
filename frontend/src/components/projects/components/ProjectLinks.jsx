export function ProjectLinks({links}) {
  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    links && <div className="flex project-links">
    {Object.entries(links).map(([type, url]) => (
    <button
        key={type}
        type="button"
        className="project-link"
        onClick={() => openLink(url)}
        title={url}
    >
        {type}
    </button>
    ))}
    </div>

  );
}
export default ProjectLinks;
