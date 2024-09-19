import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import AOS from "aos";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import Message from "../utils/Message";

function Communication(props) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [errors, setErrors] = useState({ name: "", tel: "" });
  const { sendMessage, loading } = Message();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const validateField = (fieldName, value) => {
    let error = "";

    // Trim the value to remove leading/trailing spaces
    const trimmedValue = value.trim();

    // Define a regex to check for invalid characters (non-alphabetical or name-related characters)
    const invalidCharacters = /[^a-zA-Z\s'-]/; // Allows letters, spaces, hyphens, and apostrophes

    switch (fieldName) {
      case "name":
        if (!trimmedValue) {
          error = t("communication.validation.nameRequired");
        } else if (trimmedValue.length < 3) {
          error = t("communication.validation.nameMinLength");
        } else if (invalidCharacters.test(trimmedValue)) {
          error = t("communication.validation.nameInvalidChars");
        } else if (!isNaN(parseFloat(trimmedValue)) && isFinite(trimmedValue)) {
          error = t("communication.validation.nameNotNumber");
        }
        break;

      case "tel":
        if (!trimmedValue) {
          error = t("communication.validation.telRequired");
        } else if (trimmedValue.length < 10) {
          error = t("communication.validation.telInvalid");
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
    return error === "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateField("name", name);
    const isTelValid = validateField("tel", tel);

    if (isNameValid && isTelValid) {
      try {
        await sendMessage({ name, tel });
        toast.success(t("communication.success_message"));
        setName("");
        setTel("");
        setErrors({ name: "", tel: "" });
      } catch (err) {
        toast.error(t("communication.error_message"));
      }
    }
  };

  return (
    <div className="bg-gray-900 lg:px-[10rem] px-6 lg:py-12 py-6">
      <div
        id="communication"
        className="relative bg-cover bg-no-repeat bg-top lg:px-10 px-6 lg:py-16 py-8 text-white rounded-xl shadow-lg"
        style={{ backgroundImage: `url("/images/communication.png")` }}
      >
        <h2 className="lg:w-1/3 lg:text-4xl text-2xl lg:text-left text-center font-semibold lg:mb-10 mb-6">
          {t("communication.heading")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md lg:mx-0 mx-auto lg:text-base text-sm "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-quart"
        >
          <div>
            <input
              id="name"
              type="text"
              placeholder={t("communication.name_placeholder")}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => validateField("name", name)}
            />
            {errors.name && (
              <p className="text-red-700 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <PhoneInput
              country={"uz"}
              value={tel}
              onChange={(phone) => setTel(phone)}
              containerStyle={{
                width: "100%",
                color: "black",
              }}
              inputProps={{
                id: "tel",
              }}
              inputStyle={{
                width: "100%",
                borderColor: "#D1D5DB",
                backgroundColor: "#e5e7eb",
              }}
              containerClass="inputContainer"
              inputClass="contactInput"
            />
            {errors.tel && <p className="text-red-700 text-sm">{errors.tel}</p>}
          </div>
          <div>
            <textarea
              id="msg"
              placeholder={t("communication.message_placeholder")}
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl border-2 border-teal-600 bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300"
            disabled={loading}
          >
            {loading
              ? t("communication.loading_button")
              : t("communication.submit_button")}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Communication;
