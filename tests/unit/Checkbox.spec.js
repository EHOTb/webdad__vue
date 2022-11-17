import { mount } from "@vue/test-utils";
import Checkbox from "../../src/components/atoms/Checkbox";

describe("Компонент Checkbox", () => {
  it("Snapshot Checkbox", () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("emit события Checkbox", () => {
    const wrapper = mount(Checkbox);
    wrapper.find("input").trigger("click");
    expect(wrapper.emitted("checkCheckbox")).toBeTruthy();
  });
  it("props", () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        isChecked: true,
      },
    });
    expect(wrapper.find("input").element.checked).toBeTruthy();
  });
});
