import type { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { AlertTriangle, Info, XOctagon } from "react-feather";
import { color } from "@/styles/helpers";

export type VariantType = "default" | "info" | "warning" | "error";

interface BlockQuoteProps {
  variant?: VariantType;
  children: ReactNode;
}

const SHARED_STYLES = {
  "--padding": "0",
  "--subPadding": "32px",
  "--headerTextColor": `${color("reverse.main")}`,
  "--borderColor": `${color("accent.main")}`,
  "--borderWidth": "1px",
  "--borderRadius": "10px",
  "--fontStyle": "normal",
};

const getStyles = (type: VariantType) => {
  switch (type) {
    case "default":
      return {
        "--padding": "16px 32px",
        "--subPadding": "0",
        "--borderColor": `${color("accent.main")}`,
        "--borderWidth": "0 0 0 5px",
        "--bgColor": "transparent",
        "--borderRadius": "0",
        "--fontStyle": "italic",
      };

    case "info":
      return {
        ...SHARED_STYLES,
        "--borderColor": `${color("info.main")}`,
      };

    case "warning":
      return {
        ...SHARED_STYLES,
        "--borderColor": `${color("warning.main")}`,
      };

    case "error":
      return {
        ...SHARED_STYLES,
        "--borderColor": `${color("error.main")}`,
      };

    default:
      throw new Error(`Style Error with ${type}`);
  }
};

const getTitle = (type: VariantType) => {
  switch (type) {
    case "default":
      return <>Default</>;
    case "info":
      return (
        <>
          <Info /> Info
        </>
      );
    case "warning":
      return (
        <>
          <AlertTriangle /> Warning
        </>
      );
    case "error":
      return (
        <>
          <XOctagon /> Error
        </>
      );

    default:
      throw new Error(`Header Error with ${type}`);
  }
};

/**
 * ## Variant in MDX:
 * 
 * For _info_:
 * ```
 > [!INFO] Avian carriers can provide high delay, low
 > throughput, and low altitude service.
 ```
 * 
 * For _warning_:
 * ```
 > [!WARNING] Avian carriers can provide high delay, low
 > throughput, and low altitude service.
 ```
 * 
 * For _error_:
 * ```
> [!ERROR] Avian carriers can provide high delay, low
> throughput, and low altitude service.
 ```
 *
  */
const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  variant = "default",
  ...rest
}) => {
  const styles = getStyles(variant);
  const title = getTitle(variant);

  return (
    <Wrapper style={styles as CSSProperties} {...rest}>
      {variant === "default" ? null : (
        <Header style={{ "--bgColor": "var(--borderColor)" } as CSSProperties}>
          {title}
        </Header>
      )}
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.blockquote`
  font-style: var(--fontStyle);
  background-color: var(--bgColor);
  border-style: solid;
  border-color: var(--borderColor);
  border-width: var(--borderWidth);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  overflow: hidden;
`;

const Header = styled.header`
  font-size: var(--font-size-md);
  font-family: var(--ff-heading);
  color: var(--headerTextColor);
  background-color: var(--bgColor);
  padding: 4px var(--subPadding);
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
    margin-left: calc(var(--subPadding) / 2 * -1);
  }
`;

const Container = styled.div`
  padding: var(--subPadding);
`;

export default BlockQuote;
