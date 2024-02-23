import { describe, expect, it } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { Home } from "../src/pages/Home";
import { IProduct } from "../src/components/Product";
import { vi } from "vitest";
import * as productApi from "../src/api/products";
import React from "react";

describe("Home page", () => {
  it("should render home page", () => {
    render(<Home />);

    const home = screen.getByRole("main");

    expect(home).toBeInTheDocument();
  });

  it("should render correct number products", () => {
    const products: IProduct[] = [{ name: "Apple", imgURL: "url", price: 20 }];

    const { getAllByTestId } = render(<Home />);

    const catalogue = screen.getByRole("list");
    const productElements = getAllByTestId(/product-/);

    expect(catalogue).toBeInTheDocument();
    expect(productElements).toHaveLength(products.length);
  });

  it("should fetch the products on load and render catalogue", async () => {
    const products = [{ name: "Apple", imgURL: "url", price: 100 }];
    vi.spyOn(productApi, "getProducts").mockResolvedValue(products);

    act(() => {
      render(<Home />);
    });

    const catalogue = await screen.findByRole("list");
    const productElements = await screen.findAllByTestId(/product-/);

    expect(catalogue).toBeInTheDocument();
    expect(productElements).toHaveLength(products.length);
  });
});
