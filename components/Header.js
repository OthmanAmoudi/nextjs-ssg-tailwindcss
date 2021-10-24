import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>
            <Image src='/images/logo.png' width={40} height={40} alt="logo"/>
          </a>
        </Link>
      </div>
    </header>
  );
}

Layout.defaultProps = {
  title: 'welcome to devspace',
  keywords: 'coding, programming, best info, news, javascript, python',
  description: 'the best information you will find',
};
