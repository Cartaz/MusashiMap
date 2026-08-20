// Compatibility entry point for existing local commands and old links.
// The canonical validator now covers every published book.
import { runCli } from "./validate-data.mjs";

process.exitCode = runCli(process.argv.slice(2));
