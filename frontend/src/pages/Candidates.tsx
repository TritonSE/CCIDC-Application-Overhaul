import { PathwayTimeline } from "../components/index.ts";

export function Candidates() {
  return (
    <>
      <h2>Candidates</h2>
      <PathwayTimeline path={1} progress={2} />
    </>
  );
}
