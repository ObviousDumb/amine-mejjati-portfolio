"use client";

import { useEffect, useRef } from "react";

interface Bat {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wingAngle: number;
  flapSpeed: number;
}

export default function ParticleSkyline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let bats: Bat[] = [];
    const maxBats = 22;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create single bat
    const createBat = (yStart = false): Bat => {
      const x = Math.random() * canvas.width;
      const y = yStart ? Math.random() * canvas.height : canvas.height + 20;
      return {
        x,
        y,
        size: Math.random() * 0.4 + 0.35, // scale factor
        speedX: (Math.random() - 0.5) * 1.5 + (Math.random() > 0.5 ? 0.5 : -0.5), // sideways drift
        speedY: -(Math.random() * 1.2 + 0.6), // flying upwards
        opacity: Math.random() * 0.4 + 0.15,
        wingAngle: Math.random() * Math.PI * 2,
        flapSpeed: Math.random() * 0.15 + 0.08,
      };
    };

    // Pre-populate bats
    for (let i = 0; i < maxBats; i++) {
      bats.push(createBat(true));
    }

    // Draw Bat silhouette helper
    const drawBatSilhouette = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      scale: number,
      wingAngle: number,
      opacity: number
    ) => {
      c.save();
      c.translate(x, y);
      
      // Animate wing flap by scaling the height based on a sine wave
      const flapScale = Math.sin(wingAngle);
      c.scale(scale * 1.4, scale * flapScale);
      
      c.fillStyle = `rgba(12, 14, 18, ${opacity})`;
      
      c.beginPath();
      c.moveTo(0, -2);
      // Left ears & head
      c.lineTo(-1.5, -4);
      c.lineTo(-2.5, -2);
      c.lineTo(-5, -2);
      // Left wing top curve
      c.bezierCurveTo(-12, -9, -22, -5, -30, 5);
      // Left wing bottom curves
      c.bezierCurveTo(-22, 6, -15, 1, -10, 6);
      c.bezierCurveTo(-6, 3, -3, 8, 0, 2);
      // Right wing bottom curves
      c.bezierCurveTo(3, 8, 6, 3, 10, 6);
      c.bezierCurveTo(15, 1, 22, 6, 30, 5);
      // Right wing top curve
      c.bezierCurveTo(22, -5, 12, -9, 5, -2);
      c.lineTo(2.5, -2);
      c.lineTo(1.5, -4);
      c.closePath();
      c.fill();
      c.restore();
    };

    // Draw rocky stalagmites (cave floor)
    const drawCaveFloor = (c: CanvasRenderingContext2D, w: number, h: number) => {
      c.beginPath();
      c.moveTo(0, h);
      c.lineTo(0, h - 35);
      
      const steps = 16;
      const stepWidth = w / steps;
      for (let i = 1; i <= steps; i++) {
        const peakX = i * stepWidth;
        const peakY = h - (20 + Math.sin(i * 1.7) * 20 + (i % 3 === 0 ? 30 : 0));
        c.lineTo(peakX - stepWidth / 2, peakY);
        c.lineTo(peakX, h - (15 + Math.cos(i * 2.3) * 12));
      }
      
      c.lineTo(w, h);
      c.closePath();
      c.fillStyle = "rgba(4, 5, 7, 0.98)";
      c.fill();

      // Muted slate glow line along jagged peaks
      c.beginPath();
      c.moveTo(0, h - 35);
      for (let i = 1; i <= steps; i++) {
        const peakX = i * stepWidth;
        const peakY = h - (20 + Math.sin(i * 1.7) * 20 + (i % 3 === 0 ? 30 : 0));
        c.lineTo(peakX - stepWidth / 2, peakY);
        c.lineTo(peakX, h - (15 + Math.cos(i * 2.3) * 12));
      }
      c.strokeStyle = "rgba(0, 217, 255, 0.25)";
      c.lineWidth = 1;
      c.stroke();
    };

    // Draw rocky stalactites (cave ceiling)
    const drawCaveCeiling = (c: CanvasRenderingContext2D, w: number, h: number) => {
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(0, 45);
      
      const steps = 14;
      const stepWidth = w / steps;
      for (let i = 1; i <= steps; i++) {
        const peakX = i * stepWidth;
        const peakY = 15 + Math.cos(i * 1.5) * 25 + (i % 4 === 0 ? 40 : 0);
        c.lineTo(peakX - stepWidth / 2, peakY);
        c.lineTo(peakX, 12 + Math.sin(i * 2.1) * 15);
      }
      
      c.lineTo(w, 0);
      c.closePath();
      c.fillStyle = "rgba(4, 5, 7, 0.96)";
      c.fill();

      // Muted slate line along ceiling peaks
      c.beginPath();
      c.moveTo(0, 45);
      for (let i = 1; i <= steps; i++) {
        const peakX = i * stepWidth;
        const peakY = 15 + Math.cos(i * 1.5) * 25 + (i % 4 === 0 ? 40 : 0);
        c.lineTo(peakX - stepWidth / 2, peakY);
        c.lineTo(peakX, 12 + Math.sin(i * 2.1) * 15);
      }
      c.strokeStyle = "rgba(0, 217, 255, 0.2)";
      c.lineWidth = 1;
      c.stroke();
    };

    // Draw sweeping searchlight Bat-Signal
    const drawBatSignal = (c: CanvasRenderingContext2D, w: number, h: number) => {
      // Sweeping angle calculations
      const sweepAngle = Math.sin(Date.now() * 0.0004) * 0.15 - 0.5; // slow rotation
      const sourceX = w * 0.8; // originating from bottom right of cave
      const sourceY = h;
      const beamLength = h * 1.35;
      const targetX = sourceX + Math.cos(sweepAngle + Math.PI) * beamLength;
      const targetY = sourceY + Math.sin(sweepAngle + Math.PI) * beamLength;

      // Draw light cone gradient
      const coneGrd = c.createLinearGradient(sourceX, sourceY, targetX, targetY);
      coneGrd.addColorStop(0, "rgba(0, 217, 255, 0.0)");
      coneGrd.addColorStop(0.3, "rgba(0, 217, 255, 0.02)");
      coneGrd.addColorStop(0.7, "rgba(0, 217, 255, 0.1)");
      coneGrd.addColorStop(1, "rgba(0, 217, 255, 0.22)");

      c.beginPath();
      c.moveTo(sourceX - 20, sourceY);
      c.lineTo(targetX - 90, targetY);
      c.lineTo(targetX + 90, targetY);
      c.lineTo(sourceX + 20, sourceY);
      c.closePath();
      c.fillStyle = coneGrd;
      c.fill();

      // Cloud reflection bloom (moonlit projection oval)
      c.save();
      c.translate(targetX, targetY);
      c.rotate(sweepAngle + Math.PI / 2);

      const ovalGrd = c.createRadialGradient(0, 0, 10, 0, 0, 85);
      ovalGrd.addColorStop(0, "rgba(0, 217, 255, 0.45)");
      ovalGrd.addColorStop(0.4, "rgba(0, 217, 255, 0.18)");
      ovalGrd.addColorStop(1, "rgba(0, 0, 0, 0)");

      c.beginPath();
      c.ellipse(0, 0, 85, 55, 0, 0, Math.PI * 2);
      c.fillStyle = ovalGrd;
      c.fill();

      // Mask/Draw the Bat symbol silhouette inside the searchlight beam end
      c.scale(1.2, 1.2);
      c.fillStyle = "rgba(4, 5, 7, 0.78)"; // Dark symbol mask
      c.beginPath();
      c.moveTo(0, -6);
      
      // Bat ears & head
      c.lineTo(-2, -10);
      c.lineTo(-4, -6);
      c.lineTo(-8, -6);
      // Left wing top curve
      c.bezierCurveTo(-22, -14, -36, -6, -45, 8);
      // Left wing bottom curves
      c.bezierCurveTo(-33, 9, -22, 2, -14, 10);
      c.bezierCurveTo(-9, 5, -4, 12, 0, 4);
      // Right wing bottom curves
      c.bezierCurveTo(4, 12, 9, 5, 14, 10);
      c.bezierCurveTo(22, 2, 33, 9, 45, 8);
      // Right wing top curve
      c.bezierCurveTo(36, -6, 22, -14, 8, -6);
      c.lineTo(4, -6);
      c.lineTo(2, -10);
      
      c.closePath();
      c.fill();
      c.restore();
    };

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pitch black gothic sky backdrop
      ctx.fillStyle = "rgba(3, 4, 6, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Bat-Signal Searchlight projection
      drawBatSignal(ctx, canvas.width, canvas.height);

      // 2. Draw flying bats
      bats.forEach((b, index) => {
        b.x += b.speedX;
        b.y += b.speedY;
        b.wingAngle += b.flapSpeed;

        // Draw flapping bat
        drawBatSilhouette(ctx, b.x, b.y, b.size, b.wingAngle, b.opacity);

        // Reset bats when they fly off screen
        if (b.y < -30 || b.x < -40 || b.x > canvas.width + 40) {
          bats[index] = createBat(false);
        }
      });

      // 3. Draw cave formations (framing view)
      drawCaveFloor(ctx, canvas.width, canvas.height);
      drawCaveCeiling(ctx, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none bg-[#030406]"
    />
  );
}
