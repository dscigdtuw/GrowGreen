import React from "react";
import { DragHandleIcon } from '@chakra-ui/icons';
import {
  Link as ChakraLink,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Img,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <Box {...props}>
      <Img h="50px" rounded="10px" src="https://github.com/dscigdtuw/GrowGreen/blob/main/images/navbarlogo.png?raw=true" alt="GrowGreen" />
    </Box>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color="white" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, component, ...rest }) => {
  return (
    <ChakraLink as={ReactRouterLink} to={component}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={12}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem component="home">Home</MenuItem>
        <MenuItem component="about">About </MenuItem>
        <MenuItem component="services">Services </MenuItem>
        <MenuItem component="products">Products </MenuItem>
        <MenuItem component="contact">Contact</MenuItem>
        <MenuItem component="nearby">Wander</MenuItem>
        <MenuItem component="">
          <Button
            leftIcon={<DragHandleIcon/>}
            size="sm"
            rounded="md"
            color="#013870"
            bg= "linear-gradient(20deg, #01E08F, #1B7340);"
            _hover= {{
              color : "#013870",
              bg : "white"
            }}
          >
            Log In
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="100"
      // mb={8}
      p={2}
      bg="#013870"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
