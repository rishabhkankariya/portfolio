import Image from "next/image";

const tools = [
  { name: "docker", icon: "@icons/docker.svg" },
  { name: "kubernetes", icon: "@icons/kubernetes.svg" },
  { name: "aws", icon: "@icons/aws.svg" },
  { name: "terraform", icon: "@icons/terraform.svg" },
  { name: "linux", icon: "@icons/linux.svg" },
  { name: "mysql", icon: "@icons/mysql.svg" },
  { name: "react", icon: "@icons/react.svg" },
  { name: "javascript", icon: "@icons/javascript.svg" },
  { name: "typescript", icon: "@icons/typescript.svg" },
  { name: "python", icon: "@icons/python.svg" },
  { name: "github", icon: "@icons/github.svg" },
  { name: "vercel", icon: "@icons/vercel.svg" },
];

export default function Tools() {
  return (
    <section id="skills" className="bg-[--bg-color]">
      <div className="max-w-7xl pt-12 pb-24 mx-8 border-color border-b-4">
        <h2 className="text-4xl title-font text-(--primary-color) md:text-6xl lg:text-7xl font-bold mb-8 tracking-wider">
          SKILLS.
        </h2>
        <hr className="w-full border-color border-2" />

        {/* Auto-fill grid with minmax */}
        <div className="mt-16 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="skill-card-shadow rounded-lg border-color border-3 w-full aspect-square flex items-center justify-center"
            >
              <Image
                src={tool.icon.replace("@icons", "/icons")}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain max-h-[70%] max-w-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
