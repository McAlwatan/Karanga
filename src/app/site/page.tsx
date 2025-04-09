import GradientText from "@/components/global/gradient-text";

export default function Home() {
  return (
    <div className="max-h-screen flex flex-col">
      <main className="flex-1 justify-center w-full p-4 mt-4">
        
        <div>
          <GradientText className="text-[50px] font-semibold leading-none"element="H2">
            Welcome.
          </GradientText>
        </div>
      </main>
    </div>
  );
}
