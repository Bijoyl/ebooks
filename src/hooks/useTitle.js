import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect (() => {
        document.title = `${title} - eBookStore`;  
    },[title])
  return null;
}
