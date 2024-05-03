import { watch } from "fs";
import { $, ShellError } from "bun";

const stylesDir = import.meta.resolve("../views/styles");

watch(stylesDir, async (event, filename) => {
  if (event !== "change") return;

  try {
    await $`bun run build:css`.quiet();
    console.log(`Changes made in styles/${filename}`);
  } catch (err) {
    if (err instanceof ShellError) {
      console.log(`Failed with code ${err.exitCode}`);
      console.log(err.stdout.toString());
      console.log(err.stderr.toString());
    } else {
      console.log(err);
    }
  }
});
