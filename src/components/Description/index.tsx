import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content?: string;
  description?: string;
  complement?: string;
  id?: string;
  t: any;
}

const Description = ({id, title, content, complement, description, t  }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Slide direction="left">
                <h6>{t(title)}</h6>
              </Slide>
                <Content>{t(content)}</Content>
                <Content>{t(complement)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(Description);