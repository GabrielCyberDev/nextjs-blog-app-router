export default function Loading() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Carregando artigo...</h2>

        <p
          style={{
            marginTop: "1rem",
            color: "#64748B",
          }}
        >
          Aguarde alguns instantes.
        </p>
      </div>
    </main>
  );
}