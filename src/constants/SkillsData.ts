import { IconType } from "react-icons";
import {
    BiLogoAndroid,
    BiLogoBlender,
    BiLogoBootstrap,
    BiLogoCPlusPlus,
    BiLogoCss3,
    BiLogoDocker,
    BiLogoFigma,
    BiLogoFirebase,
    BiLogoFlutter,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTrello,
    BiLogoTypescript,
    BiLogoUnity,
} from "react-icons/bi";
import { FaGitlab } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiCsharp,SiApachekafka } from "react-icons/si";
import { DiDotnet,DiMsqlServer } from "react-icons/di";

/**
 * Represents the type of skill.
 */
export type SkillType = "web" | "mobile" | "game";

/**
 * Represents a skill item.
 */
export type Skill = {
    name: string;
    level: number;
    type: SkillType | SkillType[];
    logo: IconType;
};

/**
 * Array of skill data.
 */
export const SKILLS_DATA: Skill[] = [

    {
        name: "Bootstrap",
        type: "web",
        logo: BiLogoBootstrap,
        level: 4,
    },
    {
        name: "Git",
        type: ["web", "mobile", "game"],
        logo: BiLogoGit,
        level: 4,
    },
    {
        name: "Csharp",
        type: ["mobile", "web"],
        logo: SiCsharp,
        level: 5,
    },
    {
        name: "HTML5",
        type: "web",
        logo: BiLogoHtml5,
        level: 4,
    },
    {
        name: "GitLab",
        type: ["web", "mobile", "game"],
        logo: FaGitlab,
        level: 4.5,
    },
    {
        name: "Firebase",
        type: ["mobile", "web", "game"],
        logo: BiLogoFirebase,
        level: 3,
    },
    {
        name: "JavaScript",
        type: "web",
        logo: BiLogoJavascript,
        level: 4,
    },
    {
        name: "DotNetCore",
        type: "web",
        logo: DiDotnet,
        level: 4,
    },
    {
        name: "GitHub",
        type: ["web", "mobile", "game"],
        logo: BiLogoGithub,
        level: 3.5,
    },
    {
        name: "MongoDb",
        type: ["mobile", "web", "game"],
        logo: BiLogoMongodb,
        level: 2,
    },
    {
        name: "Tailwind CSS",
        type: "web",
        logo: BiLogoTailwindCss,
        level: 3.5,
    },
    {
        name: "React",
        type: "web",
        logo: BiLogoReact,
        level: 4.5,
    },
    {
        name: "MsqlServer",
        type: ["mobile", "web", "game"],
        logo: DiMsqlServer,
        level: 4,
    },
    {
        name: "Docker",
        type: ["web", "mobile"],
        logo: BiLogoDocker,
        level: 2.5,
    },
    {
        name: "TypeScript",
        type: "web",
        logo: BiLogoTypescript,
        level: 3,
    },
    {
        name: "CSS3",
        type: "web",
        logo: BiLogoCss3,
        level: 4,
    },
    {
        name: "Kafka",
        type: "web",
        logo: SiApachekafka,
        level: 3,
    },
];
