import { useCallback, useEffect, useMemo, useState } from "react";
import { CrossSvg, TickSvg } from "../svg-icons/more-icons";

export default function AdditionBoxes({
  iconMap,
  setStuff,
  changingStuff,
  stuff,
  isChecked,
  setIsChecked,
  isSmallerView,
  setShowAdditionBox,
}) {
  // those small boxes which changes stuff like status, priority for new issue
  const keyArray = Object.keys(iconMap);
  const [filteredArray, setFilteredArray] = useState(keyArray);
  const [inputValue, setInputValue] = useState("");
  const [bottomPos, setBottomPos] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setFilteredArray(
      keyArray.filter((stuffKey) =>
        stuffKey.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleButtonClick = useCallback(() => {
    setShowAdditionBox(false);
  }, [setShowAdditionBox]);

  const handleIconClick = useCallback(
    (icon) => {
      setStuff(icon);
    },
    [setStuff]
  );

  useEffect(() => {
    setBottomPos(isSmallerView ? "" : "25px");
  });
  return (
    <div className="absolute add-box-main z-50" style={{ bottom: bottomPos }}>
      <div className="flex justify-between w-full px-3.5 py-1.5">
        <input
          className="bg-[var(--color-bg-secondary)] "
          placeholder={`${changingStuff}...`}
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
        />
        <button type="button" className="buttons" onClick={handleButtonClick}>
          <CrossSvg />
        </button>
      </div>
      {!!filteredArray.length && (
        <div className="border-b border-[var(--color-border-quaternary)]" />
      )}
      <div onClick={handleButtonClick}>
        {filteredArray.map((icon, index) =>
          changingStuff === "Add label" || changingStuff === "Change label" ? (
            <TickBoxForm
              key={icon}
              iconMap={iconMap}
              icon={icon}
              setStuff={setStuff}
              stuff={stuff}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          ) : (
            <div key={icon} className="flex flex-col gap-1.5 grow px-1 pt-1">
              <button
                type="button"
                id={icon}
                className="flex justify-between hover:bg-[#63676d4f] px-1.5 py-[3px] rounded"
                onClick={() => {
                  handleIconClick(icon);
                }}
              >
                <div className="flex gap-2 items-center">
                  {iconMap[icon]}
                  <span>{icon}</span>
                </div>
                <div className="flex align-center gap-2 text-[var(--color-text-tertiary)]">
                  {stuff === icon && <TickSvg />}
                  <span>{index + 1}</span>
                </div>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TickBoxForm({
  iconMap,
  setStuff,
  icon,
  stuff,
  isChecked,
  setIsChecked,
}) {
  // Checkbox for label
  const handleCheckboxChange = () => {
    if (icon === stuff) {
      setIsChecked(false);
      setStuff("");
    } else {
      setIsChecked(true);
      setStuff(icon);
    }
  };
  return (
    <div key={icon} className="flex flex-col gap-1.5 grow px-1 pt-1">
      <div
        className="flex items-center hover:bg-[#63676d4f] px-1.5 py-[3px] rounded gap-1.5"
        onClick={handleCheckboxChange}
        key={icon}
      >
        <label
          htmlFor={icon}
          className="custom-checkbox flex gap-1 items-center"
        >
          <input
            type="checkbox"
            id={icon}
            checked={icon === stuff && isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark relative">
            <div className="tick" />
          </span>

          {iconMap[icon]}
          <span>{icon}</span>
        </label>
      </div>
    </div>
  );
}
