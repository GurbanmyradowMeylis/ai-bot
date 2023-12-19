import { memo } from "react";

function Loading() {
  return (
    <div className="loading dark:border-x-white dark:border-t-white dark:border-b-transparent" />
  );
}

export default memo(Loading);
