import { createContext, useContext, useEffect, useState } from "react";
import { sendEmailRequest } from "../api/email";

const EmailContext = createContext();

export const useEmail = () => {
  const context = useContext(EmailContext);

  if (!context) {
    throw new Error("useEmail must be used within a PostProvider");
  }

  return context;
};

export function EmailProvider({ children }) {
    const [errors, setErrors] = useState([]);
  
    const sendEmail = async (data) => {
      try {
        const res = await sendEmailRequest(data);
        return res;
      } catch (error) {
        setErrors(error.response.data);
        return error.response
      }
    };
  
    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [errors]);
  
    return (
      <EmailContext.Provider
        value={{
          sendEmail,
          errors
        }}
      >
        {children}
      </EmailContext.Provider>
    );
  }

export default EmailContext