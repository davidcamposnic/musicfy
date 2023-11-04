import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// firebase
import "./utils/firebase.js";
// style css
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// always global.scss have to be in the bottom
import "./scss/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
