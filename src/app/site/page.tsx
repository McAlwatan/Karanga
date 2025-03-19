import GradientText from "@/components/global/gradient-text";
import MyImage from "@/components/global/image";

export default function Home() {
  return (
    <div className="max-h-screen flex flex-col">
      <main className="flex-1 justify-center w-full p-4 mt-4">
        <MyImage>
          
        </MyImage>
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
