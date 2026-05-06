interface Props {
  children: string;
  index: number;
  fontsize: "fs-1" | "fs-2" | "fs-3" | "fs-4" | "fs-5" | "fs-6";
  isActive?: boolean;
  onButtonPressed: (btnNumber: number) => void;
}

const Button = ({ children, index, fontsize, isActive, onButtonPressed }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-primary w-100 h-100 " + fontsize}
      aria-current={isActive ? "page" : undefined}
      onClick={() => onButtonPressed(index)}
    >
      {children}
    </button>
  );
};

export default Button;
