import Button from "./Button";

interface Props {
  children: string;
  index: number;
  isActive: boolean;
  onButtonPressed: (btnNumber: number) => void;
}

const NavigationButton = ({ children, index, isActive, onButtonPressed }: Props) => {
  return (
    <div className="w-100 h-100">
      <Button onButtonPressed={onButtonPressed} index={index} fontsize="fs-3" isActive={isActive}>
        {children}
      </Button>
    </div>
  );
};

export default NavigationButton;
