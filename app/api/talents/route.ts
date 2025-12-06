import { NextResponse } from "next/server";

export type Talent = {
  id: number;
  name: string;
  title: string;
  experience: string;
  country: string;
  skills: string[];
  image: string;
  salary: string;
  tooltip: string;
};

const talents: Talent[] = [
  {
    id: 1,
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    country: require("../../../public/images/flag.png"),
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    image: require("../../../public/images/profile-photo.png"),
    salary: "100",
    tooltip: "FadeIn tooltips, bottom card, and arrows with the title (500ms)",
  },
  {
    id: 2,
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    country: require("../../../public/images/flag.png"),
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    image: require("../../../public/images/profile-photo.png"),
    salary: "100",
    tooltip: "FadeIn tooltips, bottom card, and arrows with the title (500ms)",
  },
  {
    id: 3,
    name: "Abhishek Gupta",
    title: "마케팅",
    experience: "2y+",
    country: require("../../../public/images/flag.png"),
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    image: require("../../../public/images/profile-photo.png"),
    salary: "100",
    tooltip: "FadeIn tooltips, bottom card, and arrows with the title (500ms)",
  },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json({ data: talents });
}
