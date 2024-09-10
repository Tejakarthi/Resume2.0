/**
 * Represents a tag for a project.
 */
export type ProjectTag =
    | "motivapp"
    | "slide-run"
    | "mind-blooming"
    | "unimiibo"
    | "code-hunter"
    | "undertale-3d";

/**
 * Represents the type of call-to-action (CTA).
 */
export type CtaType = "product" | "repository" | "store" | "video";

/**
 * Represents a call-to-action (CTA) item.
 */
export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

/**
 * Represents the type of device used in a project.
 */
export type DeviceType = "laptop" | "smartphone";

/**
 * Represents data specific to a laptop.
 */
export type LaptopData = {
    type: "laptop";
};

/**
 * Represents data specific to a smartphone.
 */
export type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

/**
 * Represents data about the device used in a project.
 */
export type DeviceData = {
    type: DeviceType;
    texture: string;
    textureCount: number;
} & (LaptopData | SmartphoneData);

/**
 * Represents data about a project.
 */
export type ProjectData = {
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

/**
 * Complete list of Project data.
 */
export const PROJECTS: ProjectData[] = [
    {
        refName: "unimiibo",
        title: "C2MB",
        isTeam: false,
        description: [
            "C2M2 Gallagher is a term often used in the context of audio electronics and signal processing. C2M2 stands for 'balanced to unbalanced' and 'unbalanced to balanced conversion' respectively. Gallagher refers to the brand name of a popular audio adapter that enables conversion between balanced and unbalanced audio signals. This device is commonly used in professional audio applications, such as live sound and recording studios, to ensure high-quality signal transmission and reception. The C2M2 Gallagher adapter is known for its reliability and flexibility, making it a sought-after tool among audio engineers.",
        ],
        tags: ["CSharp.Net","Umbraco", "First Project"],
        cta: [
            // {
            //     text: "Visit the WebSite",
            //     type: "product",
            //     href: "https://disteroby.github.io/unimiibo/",
            // },
            // {
            //     text: "See the Source Code",
            //     type: "repository",
            //     href: "https://github.com/disteroby/unimiibo",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 1,
            texture: "texture_unimiibo.png",
        },
    },
    {
        refName: "code-hunter",
        title: "Autotekne",
        isTeam: true,
        description: [
            "Autotekne is a brand of gadgets and accessories designed for automotive enthusiasts. The name 'Autotekne' comes from the Greek words 'auto' meaning self and 'tekne' meaning skill or art. The company is known for its innovative products that help car owners customize and maintain their vehicles. Their product range includes car upgrade kits, custom dashboards, steering wheels, and other axial-specific accessories. Autotekne's products are designed to enhance the overall driving experience, emphasizing style, functionality, and precision.",
        ],
        tags: ["Asp.Net Core", "CSharp.Net", "Office project"],
        device: {
            type: "laptop",
            textureCount: 1,
            texture: "texture_codehunter.png",
        },
    },
    {
        refName: "undertale-3d",
        title: "TaxBandits",
        isTeam: true,
        description: [
            "To file your U.S. taxes, start by collecting all your financial documents, such as W-2s and 1099s. Choose how you'll file: electronically using tax software or a tax professional, or by mailing paper forms. Enter your information into the system, filling out the necessary forms, typically Form 1040. Ensure all details are accurate, review your return, and submit it either electronically or by mail. After filing, keep copies of your return and supporting documents for at least three years. This helps ensure compliance and prepares you for any future audits.",
        ],
        tags: ["Asp.Net core","MicroService" ,"Office"],
        cta: [
            // {
            //     text: "Gameplay Video",
            //     type: "video",
            //     href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 2,
            texture: "texture_undertale3d.png",
        },
    },
    {
        refName: "undertale-3d",
        title: "HMS-Tool",
        isTeam: true,
        description: [
            "An HMS (Hospital Management System) is a comprehensive tool designed to streamline hospital operations and improve patient care. It automates tasks such as patient record management, appointment scheduling, billing, and inventory control. By centralizing these functions, an HMS enhances efficiency, reduces errors, and provides valuable data for better decision-making. It helps healthcare facilities manage their resources more effectively, leading to improved service quality and operational performance.",
        ],
        tags: ["Asp.net core","React"],
        cta: [
            // {
            //     text: "Gameplay Video",
            //     type: "video",
            //     href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 1,
            texture: "POS.png",
        },
    },
];
