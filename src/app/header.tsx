import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Image from "next/image";
import Link from "next/link";

export async function Header() {
    const session = await auth()
    return (
        <div className="bg-gray-200 py-2 items-center">
            <div className="container flex justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="hover:underline flex items-center gap-2">
                        <Image src="/favicon.ico" width="50" height="50" alt="Logo" />
                        bidwhen by padwhen                        
                    </Link>
                    <div>
                        <Link href="/items/create" className="hover:underline flex items-center gap-1">
                            Auction an Item  
                        </Link>  
                    </div>         
                </div>

                <div className="flex items-center gap-4">
                    {session?.user?.name}
                    {session ? <SignOut /> : <SignIn />}
                </div>
            </div>
        </div>
    )
}