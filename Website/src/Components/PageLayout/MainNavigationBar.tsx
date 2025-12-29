import NavigationButton from "../Misc/NavigationButton";
import "./MainNavigationBar.css";

interface Props{ 
  tabNames: string[]
  onTabButtonPressed: (tabNumber: number) => void
}

const MainNavigationBar = ({tabNames, onTabButtonPressed} : Props) => {

  return (
    <div className="container-fluid text-center bg-primary-footer p-1">
      <div className="row">
        {tabNames.map((tabName, index) => (
          <div className="col p-1" key={index}>
            <NavigationButton onButtonPressed={onTabButtonPressed} index={index}>
              {tabName}
            </NavigationButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNavigationBar;
