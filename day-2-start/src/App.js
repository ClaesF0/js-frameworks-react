import "./App.css";
import DefaultProfilePic from "./components/DefaultProfilePic";
import Heading from "./components/Heading";
import Paragraphs from "./components/Paragraphs";
import ProfileName from "./components/ProfileName";

function App() {
  return (
    <div className="App">
      <Heading name="Donald Duck" age="89" color="blue" fontSize="31" />
      <ProfileName />
      <DefaultProfilePic />
      <Paragraphs paragraphContent="jeg er en liten setning fra props" />
      <Heading name="Dølly Døck" age="39" color="green" fontSize="23" />
      <Paragraphs paragraphContent="jeg er enda kortere" />
    </div>
  );
}

export default App;
