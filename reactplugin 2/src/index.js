const { render } = wp.element; //we are using wp.element here!
import App from "./components/App";
if (document.getElementById("my-react-app")) {
  //check if element exists before rendering
  render(<App />, document.getElementById("my-react-app"));
}
