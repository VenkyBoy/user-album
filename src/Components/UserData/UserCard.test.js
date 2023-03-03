import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserCard from "./UserCard";

describe("UserCard component", () => {
  const mockHistory = { push: jest.fn() };
  const userData = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
  };

  it("renders without errors", () => {
    const { getByText, getByAltText } = render(
      <UserCard userData={userData} history={mockHistory} />
    );
    expect(getByText(userData.name)).toBeInTheDocument();
    expect(getByText("email")).toBeInTheDocument();
    expect(getByText(userData.email)).toBeInTheDocument();
    expect(getByText("username")).toBeInTheDocument();
    expect(getByText(userData.username)).toBeInTheDocument();
    expect(getByAltText(userData.name)).toBeInTheDocument();
  });

  it("calls the navigateUser function on click", () => {
    const { getByTestId } = render(
      <UserCard userData={userData} history={mockHistory} />
    );
    fireEvent.click(getByTestId("custom-element"));
    expect(mockHistory.push).toHaveBeenCalledWith({
      pathname: `user/${userData.id}`,
    });
  });
});
