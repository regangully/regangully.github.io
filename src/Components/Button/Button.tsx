import { styled } from "@stitches/react";

const StyledButton = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid var(--theme-accent)",
  fontFamily: '"Sora", sans-serif',
  fontWeight: 500,
  color: "var(--theme-accent)",
  fontSize: "16px",
  padding: "12px 16px 12px 16px",
  cursor: "pointer",
  transform: "skewX(-20deg)",
  display: "inline-block",
  borderRadius: "4px",
  variants: {
    variant: {
      primary: {},
      link: {
        border: "0",
      },
    },
  },
  "&:hover": {
    backgroundColor: "var(--theme-accent)",
    color: "#071726",
  },
});

const ButtonContent = styled("div", {
  transform: "skewX(20deg)",
});

const Button = (props: {
  label: string;
  onClick?: () => void;
  variant?: "link" | "primary";
}) => {
  return (
    <StyledButton onClick={props.onClick} variant={props.variant}>
      <ButtonContent>{props.label}</ButtonContent>
    </StyledButton>
  );
};

export default Button;
