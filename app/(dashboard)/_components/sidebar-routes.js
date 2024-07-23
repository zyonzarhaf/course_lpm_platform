"use client";

import SidebarItem from "./sidebar-item";
import { Layout, Compass } from "lucide-react";

const routes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search"
  }
];

const SidebarRoutes = () => {
  
  return (
    <div className="flex flex-col w-full">
      {routes.map(route => (
        <SidebarItem 
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

export default SidebarRoutes;
