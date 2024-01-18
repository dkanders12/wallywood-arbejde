import "./App.scss";
import { InstallComponent } from "./components/Installer/installer";
import { PosterListComponent } from "./components/List/list";

function App() {
  return (
    <>
      <PosterListComponent></PosterListComponent>
      <InstallComponent></InstallComponent>
    </>
  );
}

export default App;
