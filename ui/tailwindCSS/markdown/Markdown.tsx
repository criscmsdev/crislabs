
import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'

interface Props {
  markdown: string
}
export function MarkdownPreview (props: Props) {
  const { markdown } = props
  return (
    <ReactMarkdown
          children={markdown}
          remarkPlugins={[gfm, remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          // components={{
          //   code({node, inline, className, children, ...props}: any) {
          //     const match = /language-(\w+)/.exec(className || '')
          //     return !inline && match ? (
          //       <SyntaxHighlighter
          //         children={String(children).replace(/\n$/, '')}
          //         style={atomOneDark as any}
          //         language={match[1]}
          //         PreTag="div"
          //         {...props}
          //       />
          //     ) : (
          //       <code className={className} {...props}>
          //         {children}
          //       </code>
          //     )
          //   }
          // }}
        />
  )
}
