import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import {  useTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = () => {
   const { t } = useTranslation();
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const openLink = (url: string) => window.open(url)

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
			<>
				<CustomNavLinkSmall onClick={() => scrollTo("about")}>
					<Span>{t("Tokenomics")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo("mission")}>
					<Span>{t("About")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					onClick={() => openLink("https://t.me/SpikeFurieOfficial")}
				>
					<Span>{t("Telegram")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					onClick={() => openLink("https://x.com/SpikeFurie")}
				>
					<Span>{t("Twitter")}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					style={{ width: "180px" }}
					onClick={() =>
						openLink(
							"https://app.uniswap.org/explore/tokens/ethereum/0x19848077f45356b21164c412eff3d3e4ff6ebc31"
						)
					}
				>
					<Span>
						<Button>{t("Uniswap")}</Button>
					</Span>
				</CustomNavLinkSmall>
			</>
		);
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="spike-logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
