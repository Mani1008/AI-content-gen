import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials:{
    url: 'postgresql://neondb_owner:UJWFHAL5ex8E@ep-shrill-surf-a1w5ut24.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  }
});
