

import {
  Calendar,
  Inbox,
  Settings,
  ContactRound,
  ChevronDown,
  CircleDashed,
  CircleDot,Minus,
  Plus,LogOut
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarProvider,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Link } from "react-router";
export function AppSidebar() {
  return (
    <SidebarProvider >
    <Sidebar className="border-r bg-white">
      {/* Header */}
      <SidebarHeader className="h-14 border-b px-4 py-2">
        <div className="flex items-center gap-3">
          <ContactRound className="h-8 w-8 text-primary" />
          <Link to=""><span className="text-xl font-bold tracking-wide">Admin</span></Link>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-2">
        {/* Doctors Section */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>DOCTORS</span>
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <Link to="pending">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <CircleDashed className="h-5 w-5 text-muted-foreground" />
                      <span>Pending</span>
                    </div>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                   <Link to="verified">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <CircleDot className="h-5 w-5 text-muted-foreground" />
                      <span>Verified</span>
                    </div>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <Link to="rejected">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                       <span>Rejected</span>
                    </div>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Patients Section */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>PATIENTS</span>
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Inbox className="h-5 w-5 text-muted-foreground" />
                      <span>Appointments</span>
                    </div>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Settings className="h-5 w-5 text-muted-foreground" />
                      <span>Settings</span>
                    </div>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* establishment */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>ESTABLISHMENTS</span>
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Plus className="h-5 w-5 text-muted-foreground" />
                      <span>Add Establishment</span>
                    </div>
                  </SidebarMenuItem>
                  <SidebarMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 px-4 py-2">
                      <Minus className="h-5 w-5 text-muted-foreground" />
                      <span>Remove Establishment</span>
                    </div>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter className="h-14 border-b px-4 py-2">
        <div className="flex items-center gap-3">
          <LogOut className="h-6 w-6 text-primary" />
          <Link to="/"><span className="text-lg font-bold tracking-wide ">Logout</span></Link>
        </div>
      </SidebarFooter>
    </Sidebar>
    </SidebarProvider>
  );
}
