import { useContext } from "react";
import { ConfigContext } from "@contexts/ConfigContextProvider";

const SubmitFormButton = ({
  name = "Submit",
  processingName = "Submiting...",
  className,
  disabled = false,
  isLoading = false,
  isCentered = true,
}) => {
  const { setShowFlashMessage } = useContext(ConfigContext);
  const disableBtnOnclick = () => {
    setShowFlashMessage({
      isActive: true,
      message:
        "Please make sure you complete the required (*) form fields before you procceed!",
      type: "danger",
    });
  };

  let defineClassName;

  if (isCentered === true) {
    defineClassName = `${className} col-lg-5 col-md-5 col-sm-10 col-12`;
  } else if (isCentered === false) {
    defineClassName = `${className}`;
  }

  if (disabled === true) {
    return (
      <div
        role="button"
        className={`${defineClassName} btn btn_secondary_2`}
        onClick={() => disableBtnOnclick()}
        style={{ opacity: "0.5", cursor: "default" }}
      >
        Submit Disabled
      </div>
    );
  } else if (isLoading === true) {
    return (
      <div
        className={`${defineClassName} btn btn-info`}
        style={{ opacity: "0.5", cursor: "default" }}
      >
        {isLoading ? (
          <>
            <div
              className="spinner-border spinner-border-sm me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>{" "}
            {processingName}
          </>
        ) : (
          name
        )}
      </div>
    );
  } else {
    return (
      <button className={`${defineClassName} btn btn_secondary_2`}>
        {name}
      </button>
    );
  }
};

export default SubmitFormButton;
