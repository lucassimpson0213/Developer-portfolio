import { Box, Button, ButtonGroup } from "@chakra-ui/react";

import NewModel from "./NewModel";
import { Link } from "react-router-dom";

export function Home() {
  // Define the button labels and their corresponding routes
  const buttons = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" }, // Changed from '/contact' to '/about'
    { label: "Skills", path: "/skills" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <Box className="bg-gray-600 rounded flex flex-row h-1/2 w-screen justify-center">
      <div className="flex flex-row justify-center items-center">
        <ButtonGroup>
          {buttons.map(({ label, path }) => (
            <Button
              fontFamily={"adobe-garamond-pro"}
              className="justify-center items-center m-14 size-30 text-xl text-white"
              key={label}
            >
              <Link to={path}>{label}</Link>
            </Button>
          ))}
          {/* If you have a contact route
          <Button><Link to='/contact'>Contact</Link></Button> */}
        </ButtonGroup>

        <NewModel />
      </div>
    </Box>
  );
}

export default Home;
