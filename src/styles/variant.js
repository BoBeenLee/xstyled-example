import { css } from "@xstyled/styled-components";
import { variant } from "@xstyled/system";

const buttonVariants = variant({
  default: "primary",
  prop: "type",
  variants: {
    primary: css`
      color: red;
    `,
    secondary: css`
      color: blue;
    `
  }
});

const sizeVariants = variant({
  default: "md",
  prop: "size",
  variants: {
    md: css`
      padding: 8px;
    `,
    lg: css`
      padding: 16px;
    `
  }
});

export { buttonVariants, sizeVariants };
