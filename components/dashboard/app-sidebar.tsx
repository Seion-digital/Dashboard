"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Bot,
  Brain,
  BarChart3,
  Users,
  Target,
  Zap,
  Settings,
  Activity,
  TrendingUp,
  FileText,
  Shield,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "SNR Admin",
    email: "admin@snr.ai",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart3,
    },
    {
      title: "AI Command Center",
      url: "/dashboard/ai-command-center",
      icon: Bot,
    },
    {
      title: "Lead Qualification",
      url: "/dashboard/lead-qualification",
      icon: Target,
    },
    {
      title: "Content Creation",
      url: "/dashboard/content-creation",
      icon: FileText,
    },
    {
      title: "Team Status",
      url: "/dashboard/team-status",
      icon: Users,
    },
    {
      title: "Strategy Research",
      url: "/dashboard/strategy-research",
      icon: Brain,
    },
    {
      title: "Feedback Analysis",
      url: "/dashboard/feedback-analysis",
      icon: TrendingUp,
    },
  ],
  navSecondary: [
    {
      title: "Performance Analytics",
      url: "/dashboard/performance-analytics",
      icon: Activity,
    },
    {
      title: "AI Insights",
      url: "/dashboard/ai-insights",
      icon: Zap,
    },
    {
      title: "Security Center",
      url: "/dashboard/security-center",
      icon: Shield,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ onLogout, ...props }: React.ComponentProps<typeof Sidebar> & { onLogout?: () => void }) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Bot className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">SNR AI Automation</span>
                  <span className="truncate text-xs">Business Intelligence</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} onLogout={onLogout} />
      </SidebarFooter>
    </Sidebar>
    </motion.div>
  )
}
