import Markdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}
const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return <Markdown className="prose max-w-none">{content}</Markdown>;
};

export default MarkdownRenderer;
