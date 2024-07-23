"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SidebarItem = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =  pathname === "/" && href === "/" ||
                    pathname === href ||
                    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      className={cn(
        "flex h-full items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", 
        isActive && "text-indigo-900 bg-indigo-200/20 hover:bg-indigo-200/20 hover:text-indigo-900"
      )}
      onClick={onClick}
      type="button"
    >
      <span className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-indigo-900"
          )}
        />
        {label}
      </span>
      <span className={cn(
          "h-full ml-auto opacity-0 border-2 border-indigo-900 transition-all",
          isActive && "opacity-100"
        )}
      >
      </span>
    </button>
  ) 
}

export default SidebarItem;
