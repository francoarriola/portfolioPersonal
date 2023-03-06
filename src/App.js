import Styles from "./App.scss";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Name from "./Components/Name";
import "bootstrap/dist/css/bootstrap.min.css";
function App(props) {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className={Styles["App"]}>
        <Name />
      </div>
    </ThemeProvider>
  );
}

export default App;
