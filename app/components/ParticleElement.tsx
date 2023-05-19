import React, {useEffect} from "react";
import config from "./configuration.json";

function ParticleElement() {
  useEffect(() => {
    // Ensure this code is not run server-side, as window would not be defined
    if (typeof window !== "undefined") {
      // Load particles.js script
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        // Initialize particles.js
        (window as any).particlesJS("particles-js", config);
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0" id="particles-js" />
  );
}

export default ParticleElement;
