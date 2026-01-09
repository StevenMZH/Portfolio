import { useEffect, useRef, useState } from "react";

export function Reveal({ children, threshold = 0, className = "", initialState=false }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
