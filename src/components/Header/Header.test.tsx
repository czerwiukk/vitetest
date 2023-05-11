import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("PostList", () => {
  it("changes color on click", async () => {
    render(<Header />);

    const getH1 = () => screen.findByText("Testproject™ for Testpurposes™");

    let h1 = await getH1();
    expect(h1.className).toContain("red");

    h1.click();
    h1 = await getH1();
    expect(h1.className).toContain("green");

    h1.click();
    h1 = await getH1();
    expect(h1.className).toContain("red");
  });
});
