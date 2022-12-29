export const Photo = ({ width, height }) => {
  return (
    <div className="photo">
      <div className="photo-b">
        <img width={width} height={height} src="./Images/photo.jpg" alt="" />
      </div>
      <span>Amy Klassen</span>
    </div>
  );
};
