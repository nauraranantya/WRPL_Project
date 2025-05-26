// cartController.test.js
import { addToCart, updateCart, getUserCart } from "../controllers/cartController.js";
import userModel from "../models/userModel.js";

jest.mock("../models/userModel.js");

describe("Cart Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = { json: jest.fn() };
  });

  describe("addToCart", () => {
    it("should add item to cart if not present", async () => {
      req.body = { userId: "123", itemId: "book1", cover: "hard" };
      const fakeUser = { cartData: {}, save: jest.fn() };
      userModel.findById.mockResolvedValue(fakeUser);
      userModel.findByIdAndUpdate.mockResolvedValue({});

      await addToCart(req, res);

      expect(userModel.findByIdAndUpdate).toHaveBeenCalledWith("123", {
        cartData: {
          book1: {
            hard: 1,
          },
        },
      });
      expect(res.json).toHaveBeenCalledWith({ success: true, message: "Added to Cart" });
    });
  });

  describe("updateCart", () => {
    it("should update cart quantity", async () => {
      req.body = { userId: "123", itemId: "book1", cover: "hard", quantity: 3 };
      const fakeUser = { cartData: { book1: { hard: 1 } }, save: jest.fn() };
      userModel.findById.mockResolvedValue(fakeUser);
      userModel.findByIdAndUpdate.mockResolvedValue({});

      await updateCart(req, res);

      expect(userModel.findByIdAndUpdate).toHaveBeenCalledWith("123", {
        cartData: {
          book1: {
            hard: 3,
          },
        },
      });
      expect(res.json).toHaveBeenCalledWith({ success: true, message: "Cart Updated" });
    });
  });

  describe("getUserCart", () => {
    it("should return user cart data", async () => {
      req.body = { userId: "123" };
      userModel.findById.mockResolvedValue({ cartData: { book1: { hard: 2 } } });

      await getUserCart(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        cartData: { book1: { hard: 2 } },
      });
    });
  });
});
