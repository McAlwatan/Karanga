import dynamic from "next/dynamic";
import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";

const PricingSection = dynamic(
  () =>
    import("./_components/explore").then(
      (component) => component.ExploreSection,
    ),
  { ssr: true },
)

export default function Home() {
  return (
      <main className="md:px-10 py-20 flex flex-col gap-36">
        <div>
          <CallToAction />
          <DashboardSnippet />
        </div>
        <PricingSection />
      </main>
  );
}
