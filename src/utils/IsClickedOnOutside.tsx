import { useEffect } from "react";

/**
 * A component to check whether clicked inside or outside of component
 * @param {HTMLFormElement} form - The form reference to check
 * @param {function} onClick - The function to call when clicked on outside
 */

const useOutsideClickHandler = (ref: any, callback: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      const element = ref.current;
      const isClickedOutside = element && !element.contains(event.target);
      if (isClickedOutside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default useOutsideClickHandler;
