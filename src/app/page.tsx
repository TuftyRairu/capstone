import { validateRequest } from "@/validate-request";
import Image from "next/image";
import Link from "next/link";
import { logout } from "./actions";

export default async function Home() {
  const {user} = await validateRequest();

  return (
    <main>
      {user && 
        <form action={logout}>
          <button>Sign out</button>
        </form>
      }
      {!user && <Link href="/signin">Login</Link>}
      {!user && <Link href="/signup">Sign Up</Link>}
    </main>
  );
}
