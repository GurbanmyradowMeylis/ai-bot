import { memo } from "react";

function Requestings({ value, handleChange, handleClick }) {
  return (
    <div className="flex flex-col gap-5 border-2 border-black p-5 dark:border-white dark:text-black ">
      <h1 className="font-bold text-lg dark:text-white">AI BOT</h1>
      <div className="flex  gap-5">
        <input
          type="text"
          placeholder="Write your request"
          className="input dark:placeholder:"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => e.key.toLowerCase() == "enter" && handleClick()}
        />
        <button
          onClick={handleClick}
          className="button dark:bg-white dark:text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default memo(Requestings);
