import React, { ReactNode } from 'react';
import { ErrorMessageContainer } from './ErrorMessage.style';

interface Props {
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
}

const ErrorMessage: React.FunctionComponent<Props> = ({ children, color, backgroundColor, fontSize, margin, padding }) => {
  return (
    <ErrorMessageContainer
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      {children}
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
