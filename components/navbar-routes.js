"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

import Link from "next/link";

import { usePathname } from "next/navigation";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const isInstructorPage = pathname?.startsWith("/instructor");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isInstructorPage || isPlayerPage ? (
        <Link href="/">
          <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/instructor/courses">
          <Button size="sm" variant="ghost"> 
            Instructor mode
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  )
}

export default NavbarRoutes;
