import { memo } from "react";

function Response({ resInText }) {
  return (
    <div id="result" className="max-w-lg dark:text-primary-dark-color">
      <p>{resInText}</p>
    </div>
  );
}

export default memo(Response);
