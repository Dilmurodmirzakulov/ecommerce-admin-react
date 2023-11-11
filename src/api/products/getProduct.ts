import api from '../api';
import { ProductData } from './productTypes';
import { ErrorResponse } from "react-router-dom";

export const getProduct = async (lang: string): Promise<ProductData | ErrorResponse> => {
  try {
    let res = await api.get(`/products?lang=${lang}`)
    return res.data
  } catch (error: any) {
    return error.message
  }
}