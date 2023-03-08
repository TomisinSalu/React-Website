const ImageCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
    ];
  
    const prevImage = () => {
      const newIndex = currentImage - 1;
      setCurrentImage(newIndex < 0 ? images.length - 1 : newIndex);
    };
  
    const nextImage = () => {
      const newIndex = currentImage + 1;
      setCurrentImage(newIndex === images.length ? 0 : newIndex);
    };
  
    return (
      <div>
        <button onClick={prevImage}>Previous</button>
        <img src={images[currentImage]} alt="current image" />
        <button onClick={nextImage}>Next</button>
      </div>
    );
  };
  
  export default ImageCarousel;