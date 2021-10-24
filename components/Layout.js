import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="p-12">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'welcome to devspace',
  keywords: 'coding, programming, best info, news, javascript, python',
  description: 'the best information you will find',
};
