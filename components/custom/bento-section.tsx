import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { CodeSnippet } from "./code-snippet";
import { GithubGlobe } from "./github-globe";
import clsx from "clsx";
import IotWidget from "./iot-widget";
import MobileDetail from "../animata/widgets/mobile-detail";
import { CompareDemo } from "./compare-widget";
import { AiTools } from "./ai-tools";

export function BentoSection() {
  return (
    <div className="py-20">
      <BentoGrid className="max-w-7xl mx-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={clsx(
              i === 0 ||
                (i === 1 && "md:col-span-2") ||
                (i === 2 && "md:col-span-2") ||
                (i === 6 && "md:col-span-4"),
              "boder border-dashed border-2 border-gray-100 shadow-md"
            )}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Seamless AI Integrations",
    description:
      "Unlock the power of AI-driven automation and intelligent solutions for your business.",
    header: <AiTools />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  //
  //   title: "The Digital Revolution",
  //   description: "Dive into the transformative power of technology.",
  //   header: <Skeleton />,
  //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  // },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <CodeSnippet />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Outdated to Outstanding: Legacy System Transformation",
    description:
      "Unlock the full potential of your systems with intelligent upgrades that enhance efficiency, security, and innovation.",
    header: <CompareDemo />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Unleash the Potential of IoT",
    description: "Transform the way the world connects and communicates.",
    header: <IotWidget />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },

  // {
  //   title: "The Art of Design",
  //   description: "Discover the beauty of thoughtful and functional design.",
  //   header: <Skeleton />,
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },

  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description:
  //     "From AI-driven analytics to IoT-powered smart devices and cutting-edge web applications, we develop solutions that shape the future.",
  //   header: <GithubGlobe />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
