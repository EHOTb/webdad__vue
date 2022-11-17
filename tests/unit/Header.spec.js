import { mount } from "@vue/test-utils";
import Header from "../../src/components/atoms/Header";

describe("Компонент Header", () => {
  it("Snapshot Checkbox", () => {
    const wrapper = mount(Header);
    expect(wrapper.element).toMatchSnapshot();
  });
});
