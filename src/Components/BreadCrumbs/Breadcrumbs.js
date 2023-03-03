import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div className="container breadcrumb">
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key} className="path-name">
            {name}
          </span>
        ) : (
          <Link key={key} className="path-name" to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
