import Button from "./Button";

interface Props {
  children: string;
  index: number;
  onButtonPressed: (btnNumber: number) => void;
}

const NavigationButton = ({ children, index, onButtonPressed }: Props) => {
  return (
    <div className="w-100 h-100">
      <Button onButtonPressed={onButtonPressed} index={index} fontsize="fs-3">
        {children}
      </Button>
    </div>
  );
};

export default NavigationButton;
