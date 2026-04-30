"use client"

import { createContext, useContext, useState } from "react"

interface CartItem {
  id: number
  name: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(item: CartItem) {
    setItems(prev => [...prev, item])
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart deve ser usado dentro do CartProvider")
  return context
}