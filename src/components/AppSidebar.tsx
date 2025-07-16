import { Brain, Home, Moon, OrigamiIcon, Search, Settings, Sun } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { useTheme } from "./Context/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"


const items = [
    {
        title: "Home",
<<<<<<< HEAD
        url: "/",
=======
        url: "#",
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
        icon: Home,
    },
    {
        title: "Brain",
        url: "#",
        icon: Brain,
    },
    {
<<<<<<< HEAD
        title: "Lungs & Heart",
=======
        title: "Liver",
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
        url: "#",
        icon: OrigamiIcon,
    },
    {
<<<<<<< HEAD
        title: "Stomach",
=======
        title: "Search",
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
        url: "#",
        icon: Search,
    },
    {
<<<<<<< HEAD
        title: "Intestine",
=======
        title: "Settings",
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
        url: "#",
        icon: Settings,
    },
]

<<<<<<< HEAD
export default function AppSidebar({ onSelect }: { onSelect?: (item: string) => void }) {
    const { setTheme } = useTheme();
    return (
        <Sidebar >
            <SidebarHeader />
            <SidebarContent className="p-2">
                <SidebarGroup />
                <SidebarGroupLabel className="flex justify-between">
                    <span>Application</span>
=======
export default function AppSidebar() {
    const { theme, setTheme } = useTheme();
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroupLabel className="flex justify-between">
                    <span>Application</span>

>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
<<<<<<< HEAD
                                    <Button type="button" onClick={() => onSelect?.(item.title)} className="w-full justify-start">
                                        <div className="flex items-center gap-2">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </div>
                                    </Button>
=======
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
                <SidebarFooter >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
<<<<<<< HEAD
                            <Button variant="outline" size="icon" id="buttonTheme">
=======
                            <Button variant="outline" size="icon">
>>>>>>> 1815cc33d88c9d18a5d772735bcbd841de523fa8
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
