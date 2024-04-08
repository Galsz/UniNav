import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import RightNoAnimation from "./RightNoAnimation";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props}/>;
  if (props.type === "right") return <RightContentBlock {...props}/>;
  if (props.type === "noAnimation") return <RightNoAnimation {...props}/>;
  return null;
};

export default ContentBlock;