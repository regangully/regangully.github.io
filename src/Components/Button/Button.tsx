import { styled } from "@stitches/react";

const StyledButton = styled("button", {
  borderRadius: "9999px",
  backgroundColor: "transparent",
  border: "1px solid #569F63",
  color: "#569F63",
  fontSize: "16px",
  padding: "8px 16px 8px 16px",
  cursor: "pointer",
  variants: {
    variant: {
      primary: {},
      link: {
        border: "0",
      },
    },
  },
  "&:hover": {
    backgroundColor: "#569F63",
    color: "#071726",
  },
});

const Button = (props: {
  label: string;
  onClick?: () => void;
  variant?: "link" | "primary";
}) => {
  return (
    <StyledButton onClick={props.onClick} variant={props.variant}>
      {props.label}
    </StyledButton>
  );
};

export default Button;
