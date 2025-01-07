import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    try {
      // Validation
      if (!newProduct.name || !newProduct.price || !newProduct.image) {
        return {
          success: false,
          message: "Please fill in all the fields",
        };
      }

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Failed to create product");
      }

      const data = await res.json();

      // Update state with new product
      set((state) => ({
        products: [...state.products, data],
      }));

      return {
        success: true,
        message: "Product Created Successfully",
        data: data,
      };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message: error.message || "Failed to create product",
      };
    }
  },

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const res = await fetch("/api/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      set({ products: data, loading: false }); // Update to use data directly
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ error: error.message, loading: false });
      return [];
    }
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    if (!data.success) return { success: false, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? updatedProduct : product
      ),
    }));

    return { success: true, message: "Product Updated Successfully" };
  },
}));
