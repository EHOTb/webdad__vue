import { mount } from "@vue/test-utils";
import Delete from "../../src/components/atoms/Delete";

describe("Компонент Delete", () => {
  it("Delete snapshot", () => {
    const wrapper = mount(Delete);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("emit события Delete", () => {
    const wrapper = mount(Delete);
    wrapper.find("div").trigger("click");
    expect(wrapper.emitted("delete")).toBeTruthy();
  });
});
