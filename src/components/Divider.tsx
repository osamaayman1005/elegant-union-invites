import dividerImg from "@/assets/floral-divider.png";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-12 ${className}`}>
      <img src={dividerImg} alt="" loading="lazy" className="w-full max-w-md opacity-80 select-none pointer-events-none" />
    </div>
  );
}

export function MiniDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="ornament-line w-16" />
      <div className="size-1.5 rounded-full bg-moss/50" />
      <div className="ornament-line w-16" />
    </div>
  );
}
