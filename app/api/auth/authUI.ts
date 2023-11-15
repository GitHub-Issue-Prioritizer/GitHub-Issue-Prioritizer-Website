'use client';
import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
  // `${process.env.SUPABASE_PROJECT_URL}`,
  // `${process.env.SUPABASE_ANON_KEY}`
  'https://dbsedophonqpzrnseplm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2Vkb3Bob25xcHpybnNlcGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MTA1NDUsImV4cCI6MjAxNTI4NjU0NX0.vMPEc1zF9PKvA5UCCMUutR__Z-cpfUY9pKzUsYJZCvE'
)

// const App = () => (
//   <Auth
//     supabaseClient={supabase}
//     appearance={{ theme: ThemeSupa }}
//     providers={['github']}
//   />
// )

// pages/api/auth/[...nextauth].ts

// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import { NextApiRequest, NextApiResponse } from "next";
// import { supabase } from "../../utils";

// export default NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID || "",
//       clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
//     }),
//   ],
//   callbacks: {
//     async signIn(user: { email: any; }, account: any, profile: { id: any; }) {
//       const { email } = user;
//       const { id } = profile;

//       // Check if the user exists in your Supabase database
//       const { data, error } = await supabase
//         .from("users")
//         .select("*")
//         .filter("email", "eq", email);

//       if (error) {
//         console.error("Supabase error:", error);
//         return false;
//       }

//       // If the user does not exist, create a new user in Supabase
//       if (!data || data.length === 0) {
//         await supabase.from("users").upsert([{ id, email }]);
//       }

//       return true;
//     },
//   },
// });
