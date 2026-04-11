import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo = ({ className, light = true }: LogoProps) => (
  <span className={cn("font-display font-bold text-2xl tracking-tighter", className)}>
    <span className="text-brand-red">I</span>
    <span className={light ? "text-white" : "text-brand-black"}>NNO</span>
    <span className="text-brand-red">G</span>
    <span className={light ? "text-white" : "text-brand-black"}>ROUP</span>
  </span>
);
