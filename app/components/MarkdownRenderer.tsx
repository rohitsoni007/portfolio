import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLanguage = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Handle code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLanguage = line.slice(3).trim();
          codeBlockContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={i} className="my-6 rounded-lg bg-muted p-4 overflow-x-auto">
              {codeBlockLanguage && (
                <div className="text-xs text-muted-foreground mb-2 font-mono">
                  {codeBlockLanguage}
                </div>
              )}
              <pre className="text-sm">
                <code>{codeBlockContent.join('\n')}</code>
              </pre>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-3xl font-bold mt-8 mb-4 text-gradient">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold mt-4 mb-2">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={i} className="text-lg font-semibold mt-3 mb-2">
            {line.slice(5)}
          </h4>
        );
      }
      // Inline code
      else if (line.includes('`') && !line.startsWith('```')) {
        const parts = line.split('`');
        const formattedLine = parts.map((part, index) => 
          index % 2 === 1 ? (
            <code key={index} className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
              {part}
            </code>
          ) : part
        );
        
        if (line.trim() === '') {
          elements.push(<br key={i} />);
        } else {
          elements.push(
            <p key={i} className="mb-4 leading-relaxed">
              {formattedLine}
            </p>
          );
        }
      }
      // Bold text
      else if (line.includes('**')) {
        const parts = line.split('**');
        const formattedLine = parts.map((part, index) => 
          index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
        
        if (line.trim() === '') {
          elements.push(<br key={i} />);
        } else {
          elements.push(
            <p key={i} className="mb-4 leading-relaxed">
              {formattedLine}
            </p>
          );
        }
      }
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        // Look ahead to collect all list items
        const listItems = [line.slice(2)];
        let j = i + 1;
        while (j < lines.length && (lines[j].startsWith('- ') || lines[j].startsWith('* '))) {
          listItems.push(lines[j].slice(2));
          j++;
        }
        
        elements.push(
          <ul key={i} className="mb-4 ml-6 list-disc space-y-1">
            {listItems.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        
        i = j - 1; // Skip the processed list items
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(line)) {
        // Look ahead to collect all numbered list items
        const listItems = [line.replace(/^\d+\.\s/, '')];
        let j = i + 1;
        while (j < lines.length && /^\d+\.\s/.test(lines[j])) {
          listItems.push(lines[j].replace(/^\d+\.\s/, ''));
          j++;
        }
        
        elements.push(
          <ol key={i} className="mb-4 ml-6 list-decimal space-y-1">
            {listItems.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        );
        
        i = j - 1; // Skip the processed list items
      }
      // Empty lines
      else if (line.trim() === '') {
        elements.push(<br key={i} />);
      }
      // Regular paragraphs
      else {
        elements.push(
          <p key={i} className="mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-foreground">
        {formatContent(content)}
      </div>
    </div>
  );
};