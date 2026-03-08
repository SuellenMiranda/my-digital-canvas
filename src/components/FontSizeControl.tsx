import { useState, useEffect } from "react";
import { Plus, Minus, Type } from "lucide-react";

const FONT_SIZES = [
  { label: "A", value: 100 },
  { label: "A+", value: 110 },
  { label: "A++", value: 120 },
  { label: "A+++", value: 135 },
  { label: "A++++", value: 150 },
];

export default function FontSizeControl() {
  const [sizeIndex, setSizeIndex] = useState(() => {
    const saved = localStorage.getItem("font-size-index");
    return saved ? Number(saved) : 0;
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_SIZES[sizeIndex].value}%`;
    localStorage.setItem("font-size-index", String(sizeIndex));
  }, [sizeIndex]);

  const decrease = () => setSizeIndex((i) => Math.max(0, i - 1));
  const increase = () => setSizeIndex((i) => Math.min(FONT_SIZES.length - 1, i + 1));

  return (
    <div className="fixed bottom-20 left-6 z-50 flex flex-col items-center gap-2">
      {open && (
        <div className="flex flex-col gap-1.5 p-2 rounded-xl bg-background/95 backdrop-blur-xl border border-border shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={increase}
            disabled={sizeIndex === FONT_SIZES.length - 1}
            className="p-2 rounded-lg hover:bg-secondary transition-colors disabled:opacity-30 text-foreground"
            aria-label="Aumentar fonte"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-center text-muted-foreground">
            {FONT_SIZES[sizeIndex].label}
          </span>
          <button
            onClick={decrease}
            disabled={sizeIndex === 0}
            className="p-2 rounded-lg hover:bg-secondary transition-colors disabled:opacity-30 text-foreground"
            aria-label="Diminuir fonte"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Controle de tamanho da fonte"
      >
        <Type className="w-5 h-5" />
      </button>
    </div>
  );
}
