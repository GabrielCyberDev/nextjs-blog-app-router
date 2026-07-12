import fs from "fs";
import path from "path";

describe("Estrutura do Blog", () => {

  it("possui a página inicial do Next.js", () => {

    const pagePath = path.join(
      process.cwd(),
      "app",
      "page.tsx"
    );

    expect(fs.existsSync(pagePath)).toBe(true);

  });


  it("possui a pasta de artigos", () => {

    const articlesPath = path.join(
      process.cwd(),
      "app"
    );

    expect(fs.existsSync(articlesPath)).toBe(true);

  });

});