import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const docsDirectory = resolve(process.cwd(), "docs");

await copyFile(
  resolve(docsDirectory, "index.html"),
  resolve(docsDirectory, "404.html")
);
