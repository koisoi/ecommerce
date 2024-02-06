import { LinkProps } from "next/link";
import { CSSProperties } from "react";

export type NextLinkProps = LinkProps & { style?: CSSProperties };
