import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started"
  },
  {
    title: "Analisis Kebutuhan",
    href: "/markup",
    heading: "Analisis dan Desain Perangkat Lunak",
    items: [
      {
        title: "Business Requirement",
        href: "/cards",
      },
      {
        title: "Stakeholder Requirement",
        href: "/diagrams",
      },
      {
        title: "System Requirement",
        href: "/filetree",
      },
      {
        title: "Software Requirements",
        href: "/lists",
      },
    ],
  },
  {
    title: "Perancangan Desain Antarmuka",
    href: "/markup-copy",
    heading: "Perancangan Desain Antarmuka",
    items: [
      {
        title: "Sketsa Awal",
        href: "/Sketsa-Awal",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];