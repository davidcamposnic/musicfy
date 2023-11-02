import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// firebase
import "./utils/firebase.js";
// style css
import "./scss/global.scss";
import "semantic-ui-css/semantic.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
