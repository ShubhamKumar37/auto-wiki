import { Inngest } from "inngest";

// Create the Inngest client
export const inngest = new Inngest({
    id: "codebase-chat",
    isDev: true,
});