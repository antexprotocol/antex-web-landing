import { cn } from "../utils";
import Spline from "@splinetool/react-spline";

export const SplineLoader = ({ scene, className }: { scene: string; className?: string }) => {
  return (
    <main className={cn("w-full h-full [&_canvas]:relative [&_canvas]:-z-1", className)}>
      <Spline scene={scene} />
    </main>
  );
};
