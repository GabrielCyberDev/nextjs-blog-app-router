import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-container">

        <div className="logo">
          <h1>
            Next.js Blog
          </h1>

          <p>
            Aprendizados sobre Next.js moderno
          </p>
        </div>


        <nav>

          <Link href="/">
            Home
          </Link>


          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </nav>

      </div>
    </header>
  );
}