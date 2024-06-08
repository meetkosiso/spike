import { Row, Col } from "antd";
import { withTranslation, TFunction, useTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  FooterText,
  FooterCardContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const { t } = useTranslation();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="45px" height="45px" />
      </a>
    );
  };

  return (
		<>
			<Extra>
				<FooterCardContainer>
				
					<FooterText>
						COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY SPIKE
					</FooterText>
				</FooterCardContainer>
			</Extra>
		</>
	);
};

export default Footer;
