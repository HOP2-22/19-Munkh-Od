export const Photo3 = ({ width, name, date }) => {
  return (
    <div className="Photo3">
      <div className="photo-bb">
        <img width={width} src="./Images/photo3.jpg" alt="" />
      </div>
      <span>{name}</span>
      <span>|</span>
      <span>{date}</span>
    </div>
  );
};
