import { useEffect } from "react";

export function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const item = items[currentIndex];

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Fechar galeria">
          ×
        </button>

        <img src={item.src} alt={item.cap} />

        <div className="lightbox-caption">{item.cap}</div>

        <div className="lightbox-controls">
          <button className="lightbox-btn" onClick={onPrev} aria-label="Imagem anterior">
            ‹
          </button>
          <button className="lightbox-btn" onClick={onNext} aria-label="Próxima imagem">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
