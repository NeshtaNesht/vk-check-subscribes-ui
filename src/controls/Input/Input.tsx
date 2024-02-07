import { Input as DefaultInput, InputProps as DefaultInputProps } from "antd";

type InputProps = DefaultInputProps & {
  width?: number;
};

const Input: React.FC<InputProps> = ({ width, style, ...other }) => (
  <DefaultInput size="large" style={{ width, ...style }} {...other} />
);

export default Input;
