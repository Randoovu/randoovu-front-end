import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background container text-foreground p-6 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100 w-full max-md:px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            className="text-foreground/60 hover:text-foreground transition-colors text-2xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
