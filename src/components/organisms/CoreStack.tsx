// badges
import AnimatedBadgeList from "@/components/organisms/AnimatedBadgeList";

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
];

function CoreStack() {
  return (
    <section className="flex justify-center">
      <AnimatedBadgeList badgeList={coreStack} />
    </section>
  );
}

export default CoreStack;
