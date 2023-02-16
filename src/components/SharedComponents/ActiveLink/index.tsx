import React, { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMathExactHref?: boolean;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  shouldMathExactHref = false,
  ...rest
}) => {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMathExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMathExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        borderBottomColor: "#f5f5f5",
        borderBottomWidth: isActive ? "2px" : "none",
      })}
    </Link>
  );
};
