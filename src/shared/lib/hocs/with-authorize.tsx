export const withAuthorize = ({
  isAuthorized,
  ComponentForAuthorized,
  ComponentForUnauthorized,
}: IWithAuthorizeProps): JSX.Element => {
  if (isAuthorized) {
    return <ComponentForAuthorized />;
  }

  return <ComponentForUnauthorized />;
};

interface IWithAuthorizeProps {
  isAuthorized: boolean;
  ComponentForAuthorized: () => JSX.Element;
  ComponentForUnauthorized: () => JSX.Element;
}
