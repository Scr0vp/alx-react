import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders one cell with colspan=2 when isHeader is true and textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toBe("2");
  });

  it("renders two header cells when isHeader is true and textSecondCell is provided", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
    expect(wrapper.find("th")).toHaveLength(2);
  });

  it("renders two data cells when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data1" textSecondCell="Data2" />);
    expect(wrapper.find("td")).toHaveLength(2);
  });

  it("applies correct background color styles", () => {
    const headerWrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(headerWrapper.find("tr").prop("style")).toEqual({ backgroundColor: "#deb5b545" });

    const rowWrapper = shallow(<CourseListRow textFirstCell="Data1" textSecondCell="Data2" />);
    expect(rowWrapper.find("tr").prop("style")).toEqual({ backgroundColor: "#f5f5f5ab" });
  });
});
