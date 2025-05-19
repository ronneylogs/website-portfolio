import confetti from "canvas-confetti";

export default function ConfettiButton({ label = "Click me", className = "" }) {
  const handleClick = () => {
    confetti({
      particleCount: 200,
      spread: 1000,
      origin: { y: 0.2 },
    });
  };

  return (
    <button onClick={handleClick} className={`${className}`}>
      {label}
    </button>
  );
}
