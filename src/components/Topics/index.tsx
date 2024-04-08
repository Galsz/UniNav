import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper, Topic, Title } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content?: string;
  complement?: string;
  topic1?: string;
  topic2?: string;
  topic3?: string;
  topic4?: string;
  topic5?: string;
  topic6?: string;
  topic7?: string;
  topic8?: string;
  topic9?: string;
  topic10?: string;
  topic11?: string;
  topic12?: string;
  topic13?: string;
  topic14?: string;
  topic15?: string;
  id?: string;
  t: any;
}

const Titles = ({id, title, content, complement, topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9, topic10, topic11, topic12,topic13, topic14, topic15, t  }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
        <Row justify="center" align="top">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Slide direction="left">
                <Title>{t(title)}</Title>
              </Slide>
              <Slide direction="right">
                <Content>{t(content)}</Content>
              </Slide>
              <Slide direction="left">
                <Content>{t(complement)}</Content>
              </Slide>
                <Topic>{t(topic1)}</Topic>
                <Topic>{t(topic2)}</Topic>
                <Topic>{t(topic3)}</Topic>
                <Topic>{t(topic4)}</Topic>
                <Topic>{t(topic5)}</Topic>
                <Topic>{t(topic6)}</Topic>
                <Topic>{t(topic7)}</Topic>
                <Topic>{t(topic8)}</Topic>
                <Topic>{t(topic9)}</Topic>
                <Topic>{t(topic10)}</Topic>
                <Topic>{t(topic11)}</Topic>
                <Topic>{t(topic12)}</Topic>
                <Topic>{t(topic13)}</Topic>
                <Topic>{t(topic14)}</Topic>
                <Topic>{t(topic15)}</Topic>
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(Titles);
