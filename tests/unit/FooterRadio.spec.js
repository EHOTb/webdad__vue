import { mount } from "@vue/test-utils";
import FooterRadio from "../../src/components/atoms/FooterRadio";

describe("Компонент FooterRadio", () => {
  it("Snapshot FooterRadio", () => {
    const wrapper = mount(FooterRadio);
    expect(wrapper.element).toMatchSnapshot();
  });
  it("emit события", () => {
    const wrapper = mount(FooterRadio);
    wrapper.find("li").trigger("click");
    expect(wrapper.emitted("changeFilter")).toBeTruthy();
  });
  it("props", () => {
    const wrapper = mount(FooterRadio, {
      propsData: {
        name: "test",
      },
    });
    expect(wrapper.text()).toBe("test");
  });
});
