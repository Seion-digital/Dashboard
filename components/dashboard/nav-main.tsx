"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  items?: NavItem[];
};

function renderNavItems(items: NavItem[]) {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      {item.url ? (
        <SidebarMenuButton tooltip={item.title} asChild>
          <Link href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      ) : (
        <SidebarGroup>
          <div className="flex items-center gap-2 px-2 py-1 text-sm font-semibold text-muted-foreground">
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </div>
          <SidebarGroupContent>{renderNavItems(item.items || [])}</SidebarGroupContent>
        </SidebarGroup>
      )}
    </SidebarMenuItem>
  ));
}

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>{renderNavItems(items)}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
