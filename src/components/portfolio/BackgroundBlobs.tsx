export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Large blue blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] animate-blob"
        style={{
          background: "radial-gradient(circle, var(--brand-blue), transparent 70%)",
          top: "10%",
          left: "-5%",
        }}
      />
      {/* Green blob */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] animate-blob"
        style={{
          background: "radial-gradient(circle, var(--brand-green), transparent 70%)",
          top: "40%",
          right: "-8%",
          animationDelay: "7s",
        }}
      />
      {/* Small accent blob */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.035] animate-blob"
        style={{
          background: "radial-gradient(circle, var(--brand-blue), transparent 70%)",
          bottom: "10%",
          left: "30%",
          animationDelay: "14s",
        }}
      />
    </div>
  );
}
