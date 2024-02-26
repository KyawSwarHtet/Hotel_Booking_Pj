"use client";

import { Hotel, Room } from "@prisma/client";
import * as z from "zod";

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be atleast 3 characters long",
  }),
  description: z.string().min(10, {
    message: "Description must be atleast 10 characters long",
  }),
  image,
  country,
  state,
  city,
  locationDescription,
  gym,
  spa,
  bar,
  laundry,
  restaurant,
  shopping,
  freeParking,
  bikeRental,
  freeWifi,
  movieNights,
  swimmingPool,
  coffeeShop,
});

const AddHotelForm = ({ hotel }: AddHotelFormProps) => {
  return <div>Add Form</div>;
};

export default AddHotelForm;
