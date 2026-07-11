import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            color: "#2563EB",
            marginBottom: "1rem",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Página não encontrada
        </h2>

        <p
          style={{
            color: "#64748B",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}
        >
          A página que você tentou acessar não existe ou foi removida.
        </p>

        <Link
          href="/"
          className="button"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}