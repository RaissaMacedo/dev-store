'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  productId: number
  quantity: number
}
interface CartContextType {
  items:  CartItem[]
  addToCart: (productId: number) => void
}
const CartContext = createContext({} as CartContextType) 

export function CartProvider({ children }: {children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  // mutablidade, manipulacao de estado
  function addToCart(productId: number) {
    setCartItems(state => {
      const productInCart = state.some((item)  => item.productId === productId)
      // se o produto estiver no carrinho, aumentara a quantidade do produto
      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
        // se nao está no carrinho adiciona ele
      } else {
        return [...state, {productId, quantity: 1}]
      }
    })
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
//  para nao ficar importando useContext quanto o cartComponent
export const useCart = () => useContext(CartContext)