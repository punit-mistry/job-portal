import { JobRow } from "./JobRow";

export default function Jobs() {
  return (
    <div className="bg-gray-300 py-8 px-4 mx-auto"> 
      <h2 className=" font-bold text-gray-900 pb-4"> Recent Jobs</h2>
      <div className="flex flex-col gap-4 px-8 py-4">
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      <JobRow />
      </div>
    </div>
  );
}
