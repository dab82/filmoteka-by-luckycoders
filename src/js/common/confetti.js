import confetti from 'canvas-confetti';

export default function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 300, spread: 200, zIndex: 2021 });
}
