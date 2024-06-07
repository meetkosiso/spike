import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import twitterIcon from "../../assets/icons/X_icon_2.svg"
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  SocialButton,
  SocialButtonContainer,
  ServiceWrapperContainer,
  ContractAddress,
  ContractAddressContainer,
} from "./styles";
import { url } from "inspector";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: "smooth",
		});
	};

  const openLink = (url: string) => window.open(url)
	// https://x.com/SpikeFurie

	return (
		<ContentSection>
			<Fade direction={direction} triggerOnce>
				<StyledRow
					justify='space-between'
					align='middle'
					id={id}
					direction={direction}
				>
					<Col lg={11} md={11} sm={12} xs={24}>
						<SvgIcon src={icon} width='100%' height='100%' />
					</Col>
					<Col lg={11} md={11} sm={11} xs={24}>
						<ContentWrapper>
							<h6>{t(title)}</h6>
							<Content>{t(content)}</Content>
							{direction === "right" ? (
								<SocialButtonContainer>
									<SocialButton
										onClick={() => openLink("https://x.com/SpikeFurie")}
									>
										<img
											src={twitterIcon}
											height={40}
											width={40}
											alt='x-icon'
										/>
									</SocialButton>
									<SocialButton
										onClick={() =>
											openLink(
												"https://dexscreener.com/ethereum/0xb01cc2918234ec8e3fd649df395837ddc9b88353"
											)
										}
									>
										<SvgIcon src='dexscreener.svg' height='80' width='80' />
									</SocialButton>
									<SocialButton
										onClick={() => openLink("https://t.me/SpikeOfficialCTO")}
									>
										<SvgIcon src='telegram.svg' height='80' width='80' />
									</SocialButton>
									<SocialButton
										onClick={() =>
											openLink(
												"https://etherscan.io/token/0x19848077f45356b21164c412Eff3D3E4ff6Ebc31"
											)
										}
									>
										<SvgIcon src='etherscan.svg' height='53' width='53' />
									</SocialButton>
								</SocialButtonContainer>
							) : (
								<ServiceWrapperContainer>
									<ServiceWrapper>
										<Row justify='space-between'>
											{typeof section === "object" &&
												section.map(
													(
														item: {
															title: string;
															content: string;
															icon: string;
														},
														id: number
													) => {
														return (
															<Col key={id} span={11}>
																<SvgIcon
																	src={item.icon}
																	width='60px'
																	height='60px'
																/>
																<MinTitle>{t(item.title)}</MinTitle>
																<MinPara>{t(item.content)}</MinPara>
															</Col>
														);
													}
												)}
										</Row>
									</ServiceWrapper>
									{typeof section === "object" && (
										<ContractAddressContainer>
											<ContractAddress>
												Contract Address:
											</ContractAddress>
											<ContractAddress>
												0x19848077f45356b21164c412Eff3D3E4ff6Ebc31
											</ContractAddress>
										</ContractAddressContainer>
									)}

									{typeof section === "object" && (
										<Button
											name='submit'
											onClick={() =>
												openLink(
													"https://app.uniswap.org/explore/tokens/ethereum/0x19848077f45356b21164c412eff3d3e4ff6ebc31"
												)
											}
										>
											{t("GRAP SOME TOKENS FOR YOUR SELF")}
										</Button>
									)}
								</ServiceWrapperContainer>
							)}
						</ContentWrapper>
					</Col>
				</StyledRow>
			</Fade>
		</ContentSection>
	);
};

export default withTranslation()(ContentBlock);
