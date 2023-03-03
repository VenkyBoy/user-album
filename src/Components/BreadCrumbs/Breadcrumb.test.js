import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders a single breadcrumb when there is only one crumb", () => {
    const crumbs = [{ name: "Home", path: "/" }];
    const { container } = render(
      <MemoryRouter>
        <Breadcrumbs crumbs={crumbs} />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders multiple breadcrumbs when there are more than one crumb", () => {
    const crumbs = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ];
    const { container } = render(
      <MemoryRouter>
        <Breadcrumbs crumbs={crumbs} />
      </MemoryRouter>
    );
    const breadcrumbLinks = container.querySelectorAll(".path-name");
    expect(breadcrumbLinks.length).toBe(crumbs.length - 1);
    expect(breadcrumbLinks[0].getAttribute("href")).toBe(crumbs[1].path);
    expect(breadcrumbLinks[0].textContent).toBe(crumbs[1].name);
    expect(breadcrumbLinks[1].getAttribute("href")).toBe(crumbs[2].path);
    expect(breadcrumbLinks[1].textContent).toBe(crumbs[2].name);
    const lastBreadcrumb = container.querySelector(".path-name:last-child");
    expect(lastBreadcrumb.textContent).toBe(crumbs[2].name);
    expect(lastBreadcrumb.getAttribute("href")).toBeNull();
  });
});
