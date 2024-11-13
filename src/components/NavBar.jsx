import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuList, MenuButton, MenuItem, Flex, Box, Spacer, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import logo from '/Users/josep/Desktop/Web_Development/ReactJs/Patricia_Manfredi/img/Patricia Manfredi Logo 2.png';
import '/Users/josep/Desktop/Web_Development/ReactJs/Patricia_Manfredi/style/style.css';

const NavBar = () => {
  return (
    <Flex align="center" p="4" bg="gray.100" width="100%" boxShadow="md" className="navbar">
      <Box>
        <Link to="/">
          <Image src={logo} alt="Logo Patricia Manfredi" boxSize="100px" className="navbar-logo" />
        </Link>
      </Box>
      <Spacer />

      <Flex align="center" gap="8" className="navbar-links" fontFamily="'Basics Serif Free', serif">
        <Button as={Link} to="/cursos" variant="link" className="navbar-button">
          Cursos-online
        </Button>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="navbar-button">
            Moldeteca
          </MenuButton>
          <MenuList>
            <Link to={`/modeteca/category/${"Danza"}`}><MenuItem className="navbar-menu-item">Danza</MenuItem></Link>
            <Link to={`/moldeteca/category/${"Ropa"}`}><MenuItem className="navbar-menu-item">Ropa</MenuItem></Link>
            <Link to={`/moldeteca/category/`}><MenuItem className="navbar-menu-item">Todos</MenuItem></Link>
          </MenuList>
        </Menu>

        <Button as={Link} to="/merceria" variant="link" className="navbar-button">
          Merceria
        </Button>

        <Button as={Link} to="/quienes-somos" variant="link" className="navbar-button">
          Quienes Somos
        </Button>
        <Button as={Link} to="/blog" variant="link" className="navbar-button">
          Blog
        </Button>
        <Button as={Link} to="/en" variant="link" className="navbar-button">
          EN
        </Button>
      </Flex>

      <Spacer />

      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;