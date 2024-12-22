import InputBox from "../../components/base/InputBox/InputBox";
import { PROJECT_STATUS } from "../../constants/common";

export const viewProject = (project) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <p>
            <b>Name</b> : {project.name}
          </p>
          <p>
            <b>Start Date</b> : {project.startDate}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <b>End Date</b> : {project.endDate}
          </p>
          <p>
            <b>Status</b> : {project.status}
          </p>
        </div>
      </div>
    </>
  );
};

export const addProjectForm = (handleInput, input) => {
  return (
    <>
      <InputBox
        type="text"
        placeholder="Enter Project Name"
        labelText="Project Name"
        value={input?.name}
        onInputChange={(e) => handleInput(e, "name")}
      />
      <div className={`p-2 flex flex-col `}>
        <label className={`mb-[1px]`}>Start Date</label>
        <input
          type="date"
          placeholder="Enter Start Date"
          className={`pl-2 p-2 outline-none border border-gray-400 rounded`}
          onChange={(e) => handleInput(e, "startDate")}
          value={input?.startDate}
        />
      </div>
      <div className={`p-2 flex flex-col `}>
        <label className={`mb-[1px]`}>End Date</label>
        <input
          type="date"
          placeholder="Enter End Date"
          className={`pl-2 p-2 outline-none border border-gray-400 rounded`}
          onChange={(e) => handleInput(e, "endDate")}
          value={input?.endDate}
        />
      </div>
      <div className={`p-2 flex flex-col `}>
        <label className={`mb-[1px]`}>Status</label>
        <select
          className={`pl-2 p-2 outline-none border border-gray-400 rounded`}
          value={input?.status}
          onChange={(e) => handleInput(e, "status")}
        >
          <option value="">--select--</option>
          {PROJECT_STATUS.map((status, i) => (
            <option key={i} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
