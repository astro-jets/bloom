import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/utils/routes";
import { JWT } from "next-auth/jwt";
import { User } from "@/types/types";

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const options: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          const user: User = await signIn({
            email: credentials.email,
            password: credentials.password,
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (err) {
          console.error("Login error:", err);
          throw new Error("Failed to log in");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as User).id;
        token.name = user.name;
        token.email = user.email;
        token.role = (user as User).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email ?? "";
        session.user.name = token.name ?? "";
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
