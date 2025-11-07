import type { FC, ReactNode } from "react";

interface IMicroLabel {
  bg?: string;
  textColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  labelText?: string;
  onClick?: () => void;
  height?: string;
}

const MicroLabel: FC<IMicroLabel> = ({
  bg = "bg-yellow-50",
  labelText,
  textColor = "text-yellow-800",
  leftIcon,
  rightIcon,
  onClick,
  height = "full",
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-max ${height} ${bg} rounded flex items-center px-2 py-1 gap-1 hover:cursor-pointer`}
    >
      {leftIcon && <span className={textColor || ""}>{leftIcon}</span>}
      {labelText && (
        <span className={`small-medium ${textColor || ""}`}>{labelText}</span>
      )}
      {rightIcon && <span className={`${textColor || ""}`}>{rightIcon}</span>}
    </div>
  );
};

export default MicroLabel;
