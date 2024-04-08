import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  Modules,
  ContentWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  complement,
  text,
  complement2,
  complement3,
  complement4,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Content>{t(text)}</Content>
              <Modules>{t(complement)}</Modules>
              <Modules>{t(complement2)}</Modules>
              <Modules>{t(complement3)}</Modules>
              <Modules>{t(complement4)}</Modules>
            </ContentWrapper>
          </Col>
          <Col span={11}>
            <SvgIcon src={icon} width="110%" height="100%"/>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
