// 'use client';
// import Image from 'next/image';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://dbsedophonqpzrnseplm.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2Vkb3Bob25xcHpybnNlcGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTA1NDUsImV4cCI6MjAxNTI4NjU0NX0.vMPEc1zF9PKvA5UCCMUutR__Z-cpfUY9pKzUsYJZCvE';
// const supabase = createClient(supabaseUrl,supabaseAnonKey);

// export default function Home() {
//   const authRedirect = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: "github",
//       });

//       if (error) {
//         console.error(error);
//       } else {
//         window.location.href = "/welcome";
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>

//       <div>
//         <button onClick={authRedirect}>Login with Github</button>
//       </div>
//     </main>
//   );
// }


// 'use client';
// import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// const supabaseUrl = 'https://dbsedophonqpzrnseplm.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2Vkb3Bob25xcHpybnNlcGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTA1NDUsImV4cCI6MjAxNTI4NjU0NX0.vMPEc1zF9PKvA5UCCMUutR__Z-cpfUY9pKzUsYJZCvE';
// const supabase = createClient(supabaseUrl,supabaseAnonKey);

// const App = () => (
//   <Auth
//     supabaseClient={supabase}
//     appearance={{ theme: ThemeSupa }}
//     providers={['github']}
//   />
// )
// export default App;


'use client';
// import { createClient } from '@supabase/supabase-js';
// import { useEffect } from 'react';

// const supabaseUrl = 'https://dbsedophonqpzrnseplm.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2Vkb3Bob25xcHpybnNlcGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTA1NDUsImV4cCI6MjAxNTI4NjU0NX0.vMPEc1zF9PKvA5UCCMUutR__Z-cpfUY9pKzUsYJZCvE';
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const Home = () => {
//   const signInWithGithub = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'github',
//         options: {
//           redirectTo: 'http://localhost:3000/welcome',
//         },
//       });

//       if (error) {
//         console.error('Error signing in with GitHub:', error.message);
//       } else {
//         console.log('Successfully signed in with GitHub:', data);
//       }
//     } catch (error) {
//       console.error('Unexpected error:', (error as Error).message);
//     }
//   };

//   const signOut = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();

//       if (error) {
//         console.error('Error logging out:', (error as Error).message);
//       } else {
//         console.log('Successfully logged out');
//       }
//     } catch (error) {
//       console.error('Unexpected error:', (error as Error).message);
//     }
//   };

//   useEffect(() => {
//     const authStateChangeHandler = (event: string, session: any) => {
//       if (event === 'PASSWORD_RECOVERY') {
//         const newPassword = prompt('What would you like your new password to be?');
//         (supabase.auth as any).updateUser({ password: newPassword || undefined })
//           .then((data: any) => {
//             if (data) {
//               alert('Password updated successfully!');
//             }
//           })
//           .catch((_error: any) => {
//             alert('There was an error updating your password.');
//           });
//       }
//     };

//     supabase.auth.onAuthStateChange(authStateChangeHandler);

//     // Cleanup function
//     return () => {
//       supabase.auth.onAuthStateChange(authStateChangeHandler);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div>
//       <button onClick={signInWithGithub}>Login with Github</button>
//       <button onClick={signOut}>Sign Out</button>
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '../utils';

// export default function Home() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     checkUser();
//     window.addEventListener('hashchange', function () {
//       checkUser();
//     })
//   }, [router]);

//   async function checkUser() {
//     await supabase.auth.getUser();
//     setUser(user);
//   };

//   async function signInWithGithub() {
//     await supabase.auth.signInWithOAuth({
//       provider: 'github',
//     })
    
//     router.push('/prioritizer');
//   }
//   async function signOut() {
//     await supabase.auth.signOut();
//     setUser(null);
//     router.push('/');
//   }
//   if (user) {
//     <button onClick={signInWithGithub}>Login with Github</button>
//     router.push('/prioritizer');
//   }
//   else {
//     // router.push('/');
//     return (

//       <div>
//         {/* <button onClick={signInWithGithub}>Login with Github</button> */}
//         <button onClick={signOut}>Sign Out</button>
        
//       </div>
//     );
//   }
// }


// import type { NextPage } from 'next'
// import Head from 'next/head'
// import { useSession, signIn, signOut } from "next-auth/react"

// const Home: NextPage = () => {
//   const { data: session } = useSession()

//   return (
//     <div >
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
       
//       </Head>
//       <nav>
        
//         <div >
//           {session && session.user ? (
//             <button onClick={() => signOut()}>Sign out</button>
//           ) : (
//             <button onClick={() => signIn()}>Sign in</button>
//           )}
//         </div>
//       </nav>
//       <main>
//         <div>
//           {session && session.user ? (

//             <div>
//               <div>
//                 <h2>Computer Programming Cookbook</h2>
//                 <p>
//                   This is a simple hero unit, a simple jumbotron-style component for calling
//                   extra attention to featured content or information.
//                 </p>
//                 <p>
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <p>You need to sign in to access the books</p>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Home
import { LoginForm } from "../app/login/form";
// import Header from "@/components/header.component";

export default function LoginPage() {
  return (
    <>
      {/* <Header /> */}
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
