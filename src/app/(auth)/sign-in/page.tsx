import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignInPage = () => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite text-[30px] mb-2">SignIn</h5>
      <p className="text-themeTextGray leading-tight mb-3">
        Welcome back to the community. Login to see the opportunities awaiting you!.
      </p>
      <p className="text-[18px]">Username / email</p>
      <Input className="mb-3"/>
      <p className="text-[18px]">Password</p>
      <Input name="password" type="password"/>
      <div className="my-10 w-full relative">
        <div className="p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
      </div>
      <div className="items-center justify-center h-100 flex pt-2">
        <p className="text-sm text-themeTextGray font-light">
          Have an account already?{" "}
          <Link href={"/sign-up"}>
            <u> Sign Up</u>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignInPage;
