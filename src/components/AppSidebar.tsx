import { Brain, Home, OrigamiIcon, Search, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { Switch } from "./ui/switch"
import { useTheme } from "./Context/theme-provider"


const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Brain",
        url: "#",
        icon: Brain,
    },
    {
        title: "Liver",
        url: "#",
        icon: OrigamiIcon,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    const { theme, setTheme } = useTheme();
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroupLabel className="flex justify-between">
                    <span>Application</span>
                    <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={() => setTheme(theme === "dark" ? 'light' : 'dark')}
                    ></Switch>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <p>2</p>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
                <SidebarFooter />
            </SidebarContent>
        </Sidebar>
    )
}
