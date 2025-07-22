import { Brain, Home, Moon, OrigamiIcon, Settings, Sun } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { useTheme } from "./Context/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"


const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Brain",
        url: "#",
        icon: Brain,
    },
    {
        title: "Lungs & Heart",
        url: "#",
        icon: OrigamiIcon,
    },
    {
        title: "Intestine",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar({ onSelect }: { onSelect?: (item: string) => void }) {
    const { setTheme } = useTheme();
    return (
        <Sidebar >
            <SidebarHeader />
            <SidebarContent className="p-2">
                <SidebarGroup />
                <SidebarGroupLabel className="flex justify-between">
                    <span>Application</span>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Button type="button" onClick={() => onSelect?.(item.title)} className="w-full justify-start">
                                        <div className="flex items-center gap-2">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </div>
                                    </Button>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
                <SidebarFooter >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" id="buttonTheme">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}
