import React, { useState } from 'react';
import styled from 'styled-components';
import home from '/home.png';
import graficos from '/graficos.png';
import estoque from '/estoque.png';
import agendamento from '/agendamento.png';
import relatoriosDiario from '/relatorioDiario.png';

const NavbarContainer = styled.nav`
  background-color: #2B439C;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
  left: 0;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px;
  transition: 0.4s;

  &:hover {
    background-color: #ffffff89;
    border-radius: 10px;
    color: #ffffff;
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #ffffff89;
    border-radius: 10px;
    color: #ffffff;
  `}
`;

const NavIcon = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 5px;
`;

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <NavbarContainer>
      <NavMenu>
        <NavItem>
          <NavLink href="Estoque" isActive={activeItem === 'Estoque'} onClick={() => handleItemClick('Estoque')}>
            <NavIcon src={estoque} alt="Estoque" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Graficos" isActive={activeItem === 'Graficos'} onClick={() => handleItemClick('Graficos')}>
            <NavIcon src={graficos} alt="Graficos" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Home" isActive={activeItem === 'Home'} onClick={() => handleItemClick('Home')}>
            <NavIcon src={home} alt="Home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Agendamento" isActive={activeItem === 'Agendamento'} onClick={() => handleItemClick('Agendamento')}>
            <NavIcon src={agendamento} alt="Agendamento" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="RelatoriosDiario" isActive={activeItem === 'RelatoriosDiario'} onClick={() => handleItemClick('RelatoriosDiario')}>
            <NavIcon src={relatoriosDiario} alt="RelatoriosDiario" />
          </NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
