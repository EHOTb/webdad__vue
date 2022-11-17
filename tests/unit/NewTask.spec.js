import { mount } from "@vue/test-utils";
import NewTask from "../../src/components/atoms/NewTask";

describe("Компонент NewTask", () => {
  it("Snapshot NewTask", () => {
    const wrapper = mount(NewTask);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("emit события NewTask", () => {
    const wrapper = mount(NewTask);
    wrapper.find("input").trigger("enter");
    wrapper.find("input").trigger("change");
    expect(wrapper.emitted().createNewTask).toBeTruthy();
  });
  //   it("props", () => {
  //     const wrapper = mount(NewTask, {
  //       propsData: {
  //         value: "value",
  //       },
  //     });
  //     expect(wrapper.find("input").element.value).toEqual( "value");
  //   });
});
