import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Home() {
  const buttons = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Blog", path: "/blog" },
    { label: "SignUp", path: "/signup" },
    { label: "Examples", path: "/skills/examples" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {buttons.map(({ label, path }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink href={path}>{label}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Home;
