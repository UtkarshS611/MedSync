import AnimatedGradientText from "../../ui/animated-gradient-text";
import { cn } from "../../../lib/utils";

const TextGradient = () => {
  return (
    <AnimatedGradientText>
      💝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Welcome to Medsync
      </span>
    </AnimatedGradientText>
  );
};

export default TextGradient;
