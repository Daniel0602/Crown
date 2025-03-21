type DivisionProps = {
  width: string;
  height: string;
  color: string;
};

const Division: React.FC<DivisionProps> = ({ width, height, color }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius:"999px"
      }}
    />
  );
};

export default Division;