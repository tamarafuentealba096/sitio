import { Scheduler, Instagram } from "@/components/features";

export default async function Home() {
  return (
    <main>
      <Scheduler events={[]} />
      <Instagram />
    </main>
  );
}
