import { createContext, ReactNode, useContext, useState } from "react";
import ErrorToast from "../components/toast/toast";
import toastContext from "../utils/interfaces/toast";


const ToastContext = createContext({} as toastContext);

export const ToastProvider = ({children}: { children: ReactNode }) => {

    const [isShowing, setIsShowing] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    return (
        <ToastContext.Provider value={{ isShowing, setIsShowing, message, setMessage }}>
            <ErrorToast isShowing={isShowing} message={message}/>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
  return useContext(ToastContext);
};