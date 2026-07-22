import { useBadgeMaker } from "@/hooks/useBadgeMaker";

interface Props {
  badgeList: readonly string[];
}

function AnimatedBadgeList({ badgeList }: Props) {
  const badgeStyles = useBadgeMaker(badgeList);

  return (
    <div className="flex flex-wrap gap-2 mt-2 justify-center">
      {badgeStyles.map((badgeStyle, index) => {
        const bgColor = badgeStyle.styles.backgroundColor || "#ccc";
        return (
          <span
            key={badgeStyle.name}
            className="cool-badge text-base animate-shimmer"
            style={{
              backgroundColor: bgColor,
              color: badgeStyle.styles.textColor || "#000",
              animationDelay: `${index * 0.6}s`,
              // @ts-expect-error - CSS custom property
              "--glow-color": bgColor,
            }}
          >
            {badgeStyle.name}
          </span>
        );
      })}
    </div>
  );
}

export default AnimatedBadgeList;
