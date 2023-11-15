// 'use client';
// // Import necessary modules and libraries
// import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation'
// import appwriteSDK from "../../utils";

// // Functional component Auth
// function auth() {
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     // Function to get user data
//     const getUser = async () => {
//         try {
//             const userData = await appwriteSDK.account.get();
//             setUser(userData);  // Assuming userData is the user object
//         } catch (error) {
//             console.error(error);
//             router.push("/");
//         }
//     };

//     // Function to handle logout
//     const logOut = async () => {
//         try {
//             await appwriteSDK.account.deleteSession("current");
//             alert("Logout successful");
//             router.push("/");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     // useEffect hook to fetch user data on component mount
//     useEffect(() => {
//         getUser();
//     }, []);

//     return (
//         <div>
//             <main>
//                 <h1 className="mb-4">Github Authenticated Page</h1>
//                 {user && (
//                     <div>
//                         <p>
//                             User:{" "}
//                             <span className="fs-3 fw-bold text-capitalize">{user['name']}</span>
//                         </p>
//                         <p>
//                             Email: <span className="fs-3 fw-normal">{user['email']}</span>
//                         </p>
//                         <button onClick={logOut} className="btn-danger mt-2 fs-3">
//                             Log Out
//                         </button>
//                     </div>
//                 )}
//             </main>
//         </div>
//     );
// }
// export default auth;

'use client';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import Head from "next/head";
const supabase = createClient(
  'https://dbsedophonqpzrnseplm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2Vkb3Bob25xcHpybnNlcGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTA1NDUsImV4cCI6MjAxNTI4NjU0NX0.vMPEc1zF9PKvA5UCCMUutR__Z-cpfUY9pKzUsYJZCvE'
)

const auth = async () => {
    const router = useRouter();
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                router.push('/welcome');
            }
        })
        return () => {
            if (authListener?.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, [router]);
    
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'github',
        });
  
        if (error) {
          throw error;
        }
  
      } catch (error) {
        console.error('GitHub authentication error:', error);
      }
    
    
    return (
        <div>
          <Head>
            <title>Supabase Authentication with Github</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['github']}
          />
        </div>
      );
    }
export default auth;

//   <Auth
//     supabaseClient={supabase}
//     appearance={{ theme: ThemeSupa }}
//     providers={['github']}



//   />
    // async function signInWithGithub() {
    //     const { data, error } = await supabase.auth.signInWithOAuth({
    //         provider: 'github',
    //     })
    // }
    // async function signOut() {
    //     const { error } = await supabase.auth.signOut()
    // }