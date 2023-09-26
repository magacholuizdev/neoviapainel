import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons";
import Icon from "../../components/reusables/Icon";
import Text from "../reusables/Text";
import { colors } from "styles/variables";
import { Error, Warning, Success } from "./styles";

type InputMessageProps = {
  type: "error" | "warning" | "success";
  text: string;
  textSize: string;
};

const InputMessage = ({
  type,
  text,
  textSize,
}: InputMessageProps): JSX.Element => {
  const inputError = () => {
    return (
      <Error>
        <Icon
          icon={faExclamationCircle}
          color={`${colors.RED}`}
        />
        <Text
          value={text}
          fontSize={textSize}
          color={`${colors.RED}`}
        />
      </Error>
    );
  };

  const inputWarning = () => {
    return (
      <Warning>
        <Icon icon={faExclamationCircle} />
        <Text value={text} fontSize={textSize} color={`${colors.YELLOW}`} />
      </Warning>
    );
  };

  const inputSuccess = () => {
    return (
      <Success>
        <Icon icon={faExclamationCircle} />
        <Text
          value={text}
          fontSize={textSize}
          color={`${colors.PROTOTYPE_GREEN}`}
        />
      </Success>
    );
  };

  return (
    <>
      {type == "error" && inputError()}
      {type == "success" && inputSuccess()}
      {type == "warning" && inputWarning()}
    </>
  );
};

export default InputMessage;