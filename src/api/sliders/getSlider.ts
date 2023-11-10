import api from "../api"
import { SliderData } from "./sliderTypes"
import { ErrorResponse } from "react-router-dom"

export const getSlider = async (): Promise<SliderData | ErrorResponse> => {
  try {
    let res = await api.get("/get-slider")
    return res.data
  } catch (error: any) {
    return error.message
  }
}