import { Dispatch, SetStateAction } from "react";

interface toastContext {
    isShowing: boolean;
    setIsShowing: Dispatch<SetStateAction<boolean>>;
    message: string;
    setMessage:  Dispatch<SetStateAction<string>>;
}

export default toastContext