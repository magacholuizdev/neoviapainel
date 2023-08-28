type TextProps = {
  value: string;
  fontSize: string;
  color: string;
  fontWeight?: string;
};

const Text = ({
  fontSize,
  color,
  value,
  fontWeight,
}: TextProps): JSX.Element => {
  return (
    <p
      style={{
        fontSize: `${fontSize}`,
        color: `${color}`,
        fontWeight: `${fontWeight}`,
      }}
    >
      {value}
    </p>
  );
};

export default Text;
