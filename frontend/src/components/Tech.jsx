export function Tech({img, alt}) {
  return (
    <div className="tech">
      <img src={img} alt={alt} />
      <div>
        {alt.split(" ").map((word, i) => (
          <p key={i} className="t-body6 text-hl3">{word}</p>
        ))}
      </div>
    </div>
    
  );
}
export default Tech;
