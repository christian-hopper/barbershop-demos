declare module "react-responsive-masonry" {
  import type { ReactNode } from "react";

  type MasonryProps = {
    children: ReactNode;
    columnsCount?: number;
    gutter?: string;
    className?: string;
    style?: React.CSSProperties;
  };

  type ResponsiveMasonryProps = {
    children: ReactNode;
    columnsCountBreakPoints?: Record<number, number>;
    className?: string;
    style?: React.CSSProperties;
  };

  export default function Masonry(props: MasonryProps): JSX.Element;

  export function ResponsiveMasonry(
    props: ResponsiveMasonryProps
  ): JSX.Element;
}