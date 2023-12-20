import { createContext, useContext, useEffect, useState } from "react";
import {
  createLampReportRequest,
  createLampRequestRequest,
  getLampReportsRequest,
  getLampRequestsRequest,
  updateLampRequest,
} from "../api/lamps";

const LampContext = createContext();

export const useLamps = () => {
  const context = useContext(LampContext);

  if (!context) {
    throw new Error("useLamps must be used within a PostProvider");
  }

  return context;
};

export function LampProvider({ children }) {
  const [lamps, setLamps] = useState([]);
  const [errors, setErrors] = useState([]);

  const createLampRequest = async (post) => {
    try {
      const res = await createLampRequestRequest(post);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const createLampReport = async (post) => {
    try {
      const res = await createLampReportRequest(post);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const getLampReports = async () => {
    try {
      const res = await getLampReportsRequest();
      setLamps(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getLampRequests = async () => {
    try {
      const res = await getLampRequestsRequest();
      setLamps(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLamp = async (id, lamp) => {
    try {
      const res = await updateLampRequest(id, lamp);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
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

  return <LampContext.Provider value={{
    lamps,
    errors,
    createLampReport,
    createLampRequest,
    getLampReports,
    getLampRequests,
    updateLamp
  }}>{children}</LampContext.Provider>;
}
