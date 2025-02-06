import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseList />", () => {
  it("Renders CourseList component without crashing", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("CourseList renders the correct number of rows when no courses are provided", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(2);

    wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(2);
  });

  it("Displays 'No course available yet' when listCourses is empty", () => {
    let wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow).last().props().textFirstCell).toBe("No course available yet");
  });
});

describe("Testing <CourseList listCourses={listCourses}/>", () => {
  let wrapper;
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it("Renders the correct number of course rows", () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 1);
  });

  it("Displays the correct course names", () => {
    listCourses.forEach(course => {
      expect(
        wrapper.findWhere(node => node.props().textFirstCell === course.name)
      ).toHaveLength(1);
    });
  });
});
