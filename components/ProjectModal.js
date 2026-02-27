"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ProjectModal = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Only portal after mount (avoids SSR mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key + lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    // Lock scroll on body AND the locomotive scroll container
    document.body.style.overflow = "hidden";
    const scrollContainer = document.getElementById("trm-scroll-container");
    if (scrollContainer) scrollContainer.style.pointerEvents = "none";
    // Focus close button on open
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (scrollContainer) scrollContainer.style.pointerEvents = "";
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  if (!project || !mounted) return null;

  const { title, desc, details } = project;

  const modalJSX = (
    <div
      className="trm-modal-overlay"
      ref={overlayRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trm-modal-title"
    >
      <div className="trm-modal-container">
        {/* Close button */}
        <button
          className="trm-modal-close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close modal"
          type="button"
        >
          <i className="fas fa-times" />
        </button>

        {/* Modal content */}
        <div className="trm-modal-body">
          <h4 id="trm-modal-title" className="trm-mb-20">
            {title}
          </h4>

          <div className="trm-modal-meta">
            <div className="trm-modal-row">
              <span className="trm-label">Category:</span>
              <span className="trm-label trm-label-light">{desc}</span>
            </div>

            <div className="trm-modal-row">
              <span className="trm-label">Type:</span>
              <span className="trm-label trm-label-light">{details.type}</span>
            </div>

            <div className="trm-modal-row">
              <span className="trm-label">Languages:</span>
              <span className="trm-label trm-label-light">
                {details.languages.map((lang, i) => (
                  <span key={lang} className="trm-modal-tag">
                    {lang}
                  </span>
                ))}
              </span>
            </div>

            <div className="trm-modal-row">
              <span className="trm-label">Platform:</span>
              <span className="trm-label trm-label-light">
                {details.platform}
              </span>
            </div>

            <div className="trm-modal-row">
              <span className="trm-label">Country:</span>
              <span className="trm-label trm-label-light">
                {details.country}
              </span>
            </div>

            <div className="trm-modal-row">
              <span className="trm-label">Live URL:</span>
              <a
                href={details.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="trm-label trm-accent-color"
              >
                {details.liveUrl !== "#"
                  ? details.liveUrl.replace(/^https?:\/\/(www\.)?/, "")
                  : "Coming Soon"}
                {details.liveUrl !== "#" && (
                  <i className="fas fa-external-link-alt trm-ml-5" />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal to document.body so position:fixed is relative to the viewport,
  // not the Locomotive Scroll transform container.
  return createPortal(modalJSX, document.body);
};

export default ProjectModal;
