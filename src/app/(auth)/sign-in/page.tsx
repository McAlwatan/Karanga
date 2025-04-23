import { Button } from "@/components/ui/button";
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
          <div className="flex my-10 w-full relative">
            <div className="p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              OR CONTINUE WITH
            </div>
            <Button className="text-[15px]">
              SignIn
            </Button>
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


    // "use client"
    
    // import { useAuth } from '@/context/AuthContext';
    // import React, { useState } from 'react';
    
    // const SignIn: React.FC = () => {
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [username, setUsername] = useState('');
    //   const [isSignUp, setIsSignUp] = useState(false);
    //   const [error, setError] = useState<string | null>(null);
    //   const [loading, setLoading] = useState(false);
      
    //   const { signIn, signUp } = useAuth();
      
    //   const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError(null);
    //     setLoading(true);
        
    //     try {
    //       if (isSignUp) {
    //         // Handle sign up
    //         if (!username.trim()) {
    //           throw new Error('Username is required');
    //         }
    //         await signUp(email, password, username);
    //         alert('Sign up successful! Please check your email for confirmation.');
    //       } else {
    //         // Handle sign in
    //         await signIn(email, password);
    //       }
    //     } catch (err) {
    //       setError(err instanceof Error ? err.message : 'An error occurred');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
      
    //   return (
    //     <div className="auth-container">
    //       <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          
    //       {error && <div className="error-message">{error}</div>}
          
    //       <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>
    //           <input
    //             id="email"
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>
            
    //         <div className="form-group">
    //           <label htmlFor="password">Password</label>
    //           <input
    //             id="password"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //         </div>
            
    //         {isSignUp && (
    //           <div className="form-group">
    //             <label htmlFor="username">Username</label>
    //             <input
    //               id="username"
    //               type="text"
    //               value={username}
    //               onChange={(e) => setUsername(e.target.value)}
    //               required
    //             />
    //           </div>
    //         )}
            
    //         <button type="submit" disabled={loading}>
    //           {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
    //         </button>
    //       </form>
          
    //       <div className="auth-switch">
    //         <button 
    //           type="button" 
    //           className="link-button"
    //           onClick={() => setIsSignUp(!isSignUp)}
    //         >
    //           {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
    //         </button>
    //       </div>
    //     </div>
    //   );
    // };
    
    // export default SignIn;
    
