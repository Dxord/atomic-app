import { Dashboard } from "@/components/templates/Dashboard";
import { Footer } from "@/components/templates/Footer";
import { JobCategories } from "./api/job-categories/route";
import { Talent } from "./api/talents/route";
const baseURL = `http://localhost:3000/api`;

async function getJobCategories(): Promise<JobCategories[]> {
  const res = await fetch(baseURL + "/job-categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data.data;
}

async function getTalents(): Promise<Talent[]> {
  const res = await fetch(baseURL + "/talents", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const [jobCategories, talents] = await Promise.all([
    getJobCategories(),
    getTalents(),
  ]);

  return (
    <div>
      <Dashboard jobCategories={jobCategories} talents={talents} />
      <Footer />
    </div>
  );
}
