import { render, screen } from "@testing-library/react";
import { PostList } from "./PostList.js";

vi.mock("./usePostList.js");

describe("PostList", () => {
  it("should render data", async () => {
    const hook = await import("./usePostList.js");
    hook.default = vi
      .fn()
      .mockReturnValue([
        [{ id: 1, title: "greeting", body: "hello guys", userId: 1 }],
        { isLoading: false, isError: false },
      ]);

    render(<PostList />);
    expect(await screen.findByText("hello guys")).toBeDefined();
  });

  it("should render loading message", async () => {
    const hook = await import("./usePostList.js");
    hook.default = vi.fn().mockReturnValue([null, { isLoading: true }]);

    render(<PostList />);
    expect(await screen.findByText("Loading...")).toBeDefined();
  });

  it("should render loading message", async () => {
    const hook = await import("./usePostList.js");
    hook.default = vi
      .fn()
      .mockReturnValue([null, { isLoading: false, isError: true }]);

    render(<PostList />);
    expect(await screen.findByText("Error")).toBeDefined();
  });
});
