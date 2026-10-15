// badges
import AnimatedBadgeList from "@/components/organisms/AnimatedBadgeList";

const coreStack = [
  "Git",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "SQL",
  "AWS",
  "Terraform",
  "Docker",
];

function CoreStack() {
  return (
    <section className="flex justify-center">
      <AnimatedBadgeList badgeList={coreStack} />
    </section>
  );
}

export default CoreStack;
