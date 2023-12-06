import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

function InputSelect({ options, register }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={selectRef} className="w-full">
      <div className="relative font-montserrat shadow" onClick={handleToggle}>
        <input
          className="border border-black w-full text-start py-1 px-3 cursor-pointer block"
          value={selectedOption}
          {...register("type", { required: true })}
          readOnly
        />
        <MdKeyboardArrowDown
          className="absolute inset-y-0 right-0 mt-1 mr-1"
          size="1.5em"
        />
      </div>
      <div className="w-full relative">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border font-montserrat bg-white absolute w-full"
            >
              {options.map((option) => (
                <motion.li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="cursor-pointer hover:bg-[#6D1610] hover:text-white pl-3 py-1 rounded-sm"
                >
                  {option}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InputSelect;
