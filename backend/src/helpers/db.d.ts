declare module "./db" {
  import { Connection } from "mysql2/promise";
  export function createConnection(): Promise<Connection>;
}
