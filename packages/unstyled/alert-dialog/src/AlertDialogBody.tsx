import React, { forwardRef } from 'react';

const AlertDialogBody = <StyledAlertDialogBody,>(
  StyledAlertDialogBody: React.ComponentType<StyledAlertDialogBody>
) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    return (
      <StyledAlertDialogBody ref={ref} {...(props as StyledAlertDialogBody)} />
    );
  });

export default AlertDialogBody;
