const validClientSide = (): boolean => {
  return typeof window !== "undefined";
};

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const randomNumber = () => {
  const date = new Date().getTime();
  const number = Math.floor(Math.random() * 1000000 + 1);
  return date + number;
};

const handleInputChange = (
  event: any,
  param: string,
  setValue: React.Dispatch<React.SetStateAction<any>>
) => {
  setValue((prevState: any) => {
    return { ...prevState, [param]: event };
  });
};

const clearSpaces = (value: string): string => {
  return value.replaceAll(" ", "");
};

const isEmptyString = (email: string) => {
  return email.length === 0;
};

export {
  validClientSide,
  capitalizeFirstLetter,
  randomNumber,
  handleInputChange,
  clearSpaces,
  isEmptyString,
};
