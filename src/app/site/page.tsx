import GradientText from "@/components/global/gradient-text";

export default function Home() {
  return (
    <div className="max-h-screen flex flex-col">
      <main className="flex-1 justify-center w-full p-4 mt-4">
        
        <GradientText
          className="text-[90px] font-semibold leading-none"
          element="H2"
        >
         Something.
        </GradientText>
      </main>
    </div>
  );
}
