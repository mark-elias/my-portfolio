// badges
import AnimatedBadgeList from "@/components/organisms/AnimatedBadgeList";

const coreStack = [
  "TypeScript",
  "Node.js",
  "React",
  "Nest.js",
  "Git",
  "SQL",
  "Docker",
  "AWS",
  "Terraform",
];

function CoreStack() {
  return (
    <section className="flex justify-center">
      <AnimatedBadgeList badgeList={coreStack} />
    </section>
  );
}

export default CoreStack;
