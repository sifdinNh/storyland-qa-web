import confetti from "canvas-confetti";

export function useConfetti() {
  const triggerConfetti = () => {
    // First burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1A3A77", "#EFD3D9", "#FFD700", "#FF6B6B", "#9C27B0"],
    });

    // Second burst slightly delayed
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#1A3A77", "#EFD3D9", "#FFD700"],
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#1A3A77", "#EFD3D9", "#FFD700"],
      });
    }, 300);
  };

  return { triggerConfetti };
}
