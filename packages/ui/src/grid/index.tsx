"use client";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
// import _ from "lodash";
import "react-grid-layout/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface Props {
  className?: string;
  children: React.ReactNode;
  layouts: Layouts;
}

export const Grid = (props: Props) => {
  const { children } = props;
  return (
    <ResponsiveReactGridLayout
      {...props}
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={10}
      isDroppable
    >
      {children}
    </ResponsiveReactGridLayout>
  );
};

Grid.defaultProps = {
  className: "layout",
};
