import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth, { DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import { database } from '@/db/database'
import { accounts, sessions, users, verificationTokens } from "./db/schema"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(database, {
    accountsTable: accounts as any,
    usersTable: users,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens
  }),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    }
  },
  providers: [Google],
})