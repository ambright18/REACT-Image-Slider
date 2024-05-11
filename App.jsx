import "./App.css";
import ImageSlider from "./components/Image_Slider/ImageSlider";
function App() {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"} //stock images courtesy of picsum.photos
        page={"2"}
        limit={"10"}
      />
    </>
  );
}

export default App;
