interface BlogContentProps {
  content: React.ReactNode;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <article
        className="
          mx-auto 
          max-w-3xl 
          text-gray-700 
          leading-relaxed 
          text-[17px] 
          
          [&>h2]:mt-14
          [&>h2]:mb-6
          [&>h2]:text-3xl
          [&>h2]:font-bold
          [&>h2]:text-gray-900

          [&>h3]:mt-10
          [&>h3]:mb-4
          [&>h3]:text-xl
          [&>h3]:font-semibold
          [&>h3]:text-gray-800

          [&>p]:mb-6

          [&>ul]:my-6
          [&>ul]:pl-6
          [&>ul]:space-y-3
          [&>ul>li]:list-disc
          [&>ul>li]:marker:text-pink-500

          [&>ol]:my-6
          [&>ol]:pl-6
          [&>ol]:space-y-3
          [&>ol>li]:list-decimal
          [&>ol>li]:marker:text-pink-500

          [&>blockquote]:my-10
          [&>blockquote]:border-l-4
          [&>blockquote]:border-pink-500
          [&>blockquote]:pl-6
          [&>blockquote]:italic
          [&>blockquote]:text-lg
          [&>blockquote]:text-gray-800
          [&>blockquote]:bg-pink-50
          [&>blockquote]:py-4
          [&>blockquote]:rounded-r-lg

          [&>a]:text-pink-600
          [&>a]:font-medium
          [&>a]:underline
          [&>a:hover]:text-rose-500
        "
      >
        {content}
      </article>
    </section>
  );
}