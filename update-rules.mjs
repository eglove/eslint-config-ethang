import { updateRules } from "./build/update-rules.js";
import { updateReactRules } from "./build/update-react-rules.js";
import { updateSolidRules } from "./build/update-solid-rules.js";
import { updateAstroRules } from "./build/update-astro-rules.js";
import { updateReadme } from "./build/update-readme.js";

await updateRules();
await updateReactRules();
updateSolidRules();
updateAstroRules();
updateReadme();
