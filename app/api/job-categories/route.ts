import { NextResponse } from "next/server";

export type JobCategories = {
  id: number;
  name: string;
  icon: string;
};

const JobCategoriess: JobCategories[] = [
  { id: 1, name: "해외 마케팅", icon: "icon-marketing.png" },
  { id: 2, name: "퍼블리셔", icon: "icon-image.png" },
  { id: 3, name: "캐드원(제도사)", icon: "icon-marketing.png" },
  { id: 4, name: "해외 세일즈", icon: "icon-box.png" },
  { id: 5, name: "해외 CS", icon: "icon-target.png" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json({ data: JobCategoriess });
}
