import SignUpForm from "@/components/forms/sign-up";
import { GoogleAuthButton } from "@/components/global/google-oauth-button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">SignUp</h5>
      <p className="text-themeTextGray leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <SignUpForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signup" />
      <div className="items-center justify-center h-100 flex pt-2">
        <p className="text-sm text-themeTextGray font-light">
          Have an account already?{" "}
          <Link href={"/sign-in"}>
            <u> Sign in</u>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
