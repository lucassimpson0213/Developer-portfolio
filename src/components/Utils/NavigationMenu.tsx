import { Link as RouterLink, useLocation } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./styles.css";
import NewModel from "./NewModel";
import { Button, useColorMode } from "@chakra-ui/react";
import "../../index.css";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <RouterLink to={href}>
      <NavigationMenu.Link
        className={`NavigationMenuLink ${isActive ? "active" : ""}`}
        {...props}
      >
        {children}
      </NavigationMenu.Link>
    </RouterLink>
  );
};

export default function NavigationMenuComponent() {
  const { toggleColorMode } = useColorMode();

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/">Home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/about">About</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/skills">Skills</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/blog">Blog</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/signup">Sign Up</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Link href="/skills/examples">Examples</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <Button onClick={toggleColorMode}>Dark mode! </Button>
        </NavigationMenu.Item>

        <NewModel
          ModelTitle="Introduction"
          ModelText={`Hello this is my webpage! 
          You can go down to the homepage for my introduction.
          There's also a skills section where I display
          some of the skills I've gained over my time here!
          I like to do web development, gaming and I also like to work out!`}
        />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
