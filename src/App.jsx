import "react-toastify/dist/ReactToastify.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "./constants";
import { useCallback, useState } from "react";
import Loading from "./components/Loading";
import Response from "./components/Response";
import Requestings from "./components/Requestings";
import Navigation from "./components/Navigation";
import { ToastContainer, toast } from "react-toastify";

let tempArr = [];
async function run(
  object = {
    value: "",
    isLoading: false,
    isDarkMode: false,
    resInText: [],
  },
  setObject,
  genAI
) {
  try {
    setObject((prev) => ({ ...prev, isLoading: true }));
    let value = object.value;
    setObject((prev) => ({ ...prev, value: "" }));
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(value);
    const response = await result.response;
    const text = response.text();
    tempArr.push(text);
    setObject((prev) => ({ ...prev, resInText: tempArr }));
  } catch (e) {
    toast.error("Error accured", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } finally {
    setObject((prev) => ({ ...prev, isLoading: false }));
  }
}

function App() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [object, setObject] = useState({
    value: "",
    isLoading: false,
    isDarkMode: false,
    resInText: [],
  });

  const handleChange = useCallback((e) => {
    setObject((prev) => ({ ...prev, value: e.target.value }));
  }, []);

  const handleClick = useCallback(() => {
    run(object, setObject, genAI);
  }, []);

  const handleThemeChange = useCallback(function () {
    setObject((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }));
  });

  return (
    <div className={`h-screen  ${object.isDarkMode && "dark"}`}>
      <div className="flex flex-col gap-10 min-h-screen dark:bg-primary-dark-color duration-1000 transition-colors ease-in-out">
        <Navigation>
          <button
            className="button dark:text-black dark:bg-white"
            onClick={handleThemeChange}
          >
            switch
          </button>
        </Navigation>
        <div className="flex flex-col justify-center items-center text-black gap-5">
          <Requestings
            value={object.value}
            handleChange={handleChange}
            handleClick={handleClick}
          />
          <div className="flex justify-center items-center">
            {object.isLoading ? (
              <Loading />
            ) : (
              <Response resInText={object.resInText} />
            )}
          </div>
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
