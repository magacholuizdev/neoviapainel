import Avatar from "components/AvatarComponent";
import {
  MenuAdminLink,
  MenuContainer,
  MenuItem,
  MenuLink,
  StyledCollapse,
  StyledCollapseIcon,
  StyledHeaderSidebarContainer,
  StyledSidebarBackground,
  StyledSidebarContainer,
  StyledSidebarMenuAdmin,
} from "./styles";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Text from "components/Text";
import { colors } from "../../../styles/variables";
import { useEffect, useState } from "react";
import ButtonSubmit from "components/Button/Submit";
import Link from "next/link";
import LogoComponent from "components/LogoComponent";
import { useDepartmentContext } from "context/DepartmentContext";

export default function SidebarComponent(): JSX.Element {
  const [itemSelected, setItemSelected] = useState<string>("Home");
  const { selectedDepartment, setSelectedDepartment } = useDepartmentContext();

  return (
    <StyledSidebarBackground>
      <StyledSidebarContainer>
        <Link href="/home">
          <LogoComponent />
        </Link>
        <StyledHeaderSidebarContainer>
          <Avatar label="Financeiro"></Avatar>
          <Text
            value="Ted Mosby"
            color={colors.NEOVIA_BLACK}
            fontSize="16px"
            fontWeight="bold"
          />
        </StyledHeaderSidebarContainer>
        <StyledSidebarMenuAdmin>
          <MenuAdminLink
            isSelected={itemSelected === "Usuários" ? true : false}
            onClick={() => {
              setItemSelected("Usuários");
              setSelectedDepartment("Usuários");
            }}
          >
            <PersonIcon fontSize="large" />
            <MenuItem>Usuários</MenuItem>
          </MenuAdminLink>
          <MenuAdminLink
            isSelected={itemSelected === "Perfis" ? true : false}
            onClick={() => {
              setItemSelected("Perfis");
              setSelectedDepartment("Perfis");
            }}
          >
            <PeopleIcon fontSize="large" />
            <MenuItem>Perfis</MenuItem>
          </MenuAdminLink>
          <MenuAdminLink
            isSelected={itemSelected === "Departamentos" ? true : false}
            onClick={() => {
              setItemSelected("Departamentos");
              setSelectedDepartment("Departamentos");
            }}
          >
            <BusinessIcon fontSize="large" />
            <MenuItem>Departamentos</MenuItem>
          </MenuAdminLink>
          <MenuAdminLink
            isSelected={itemSelected === "Sistemas" ? true : false}
            onClick={() => {
              setItemSelected("Sistemas");
              setSelectedDepartment("Sistemas");
            }}
          >
            <WysiwygIcon fontSize="large" />
            <MenuItem>Sistemas</MenuItem>
          </MenuAdminLink>
        </StyledSidebarMenuAdmin>
        <MenuContainer>
          <MenuLink
            isSelected={itemSelected === "Home" ? true : false}
            onClick={() => {
              setItemSelected("Home");
              setSelectedDepartment("Home");
            }}
          >
            <HomeIcon fontSize="large" />
            <MenuItem>Home</MenuItem>
          </MenuLink>
          <MenuLink
            isSelected={itemSelected === "Engenharia" ? true : false}
            onClick={() => {
              setItemSelected("Engenharia");
              setSelectedDepartment("Engenharia");
            }}
          >
            <EngineeringIcon fontSize="large" />
            <MenuItem>Engenharia</MenuItem>
          </MenuLink>
          <MenuLink
            isSelected={itemSelected === "RH" ? true : false}
            onClick={() => {
              setItemSelected("RH");
              setSelectedDepartment("RH");
            }}
          >
            <ApartmentIcon fontSize="large" />
            <MenuItem>RH</MenuItem>
          </MenuLink>
          <MenuLink
            isSelected={itemSelected === "Contabilidade" ? true : false}
            onClick={() => {
              setItemSelected("Contabilidade");
              setSelectedDepartment("Contabilidade");
            }}
          >
            <PaymentsIcon fontSize="large" />
            <MenuItem>Contabilidade</MenuItem>
          </MenuLink>
        </MenuContainer>
      </StyledSidebarContainer>
    </StyledSidebarBackground>
  );
}
