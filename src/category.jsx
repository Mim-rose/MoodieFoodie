import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { PiBowlFood, PiHamburger } from "react-icons/pi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { LuSoup } from "react-icons/lu";
import React from "react";

const Categories = [
  {
    id: 1,
    name: "all", // ✅ Changed "All" to lowercase to match filtering logic
    icon: <TiThSmallOutline className="h-[50px] w-[50px] text-red-700" />,
  },
  {
    id: 2,
    name: "breakfast", // ✅ Matched with food.js
    icon: <MdOutlineFreeBreakfast className="h-[50px] w-[50px] text-red-700" />,
  },
  {
    id: 3,
    name: "soups", // ✅ Changed "Soup" to "Soups" for matching
    icon: <LuSoup className="h-[50px] w-[50px] text-red-700" />,
  },
  {
    id: 4,
    name: "pasta", // ✅ Matched with food.js
    icon: <CiBowlNoodles className="h-[50px] w-[50px] text-red-700 text-2xl font-bold" />,
  },
  {
    id: 5,
    name: "main_course", // ✅ Changed "MainCourse" to "main_course" for matching
    icon: <PiBowlFood className="h-[50px] w-[50px] text-red-700" />,
  },
  {
    id: 6,
    name: "pizza", // ✅ Matched with food.js
    icon: <LiaPizzaSliceSolid className="h-[50px] w-[50px] text-red-700" />,
  },
  {
    id: 7,
    name: "burger", // ✅ Matched with food.js
    icon: <PiHamburger className="h-[50px] w-[50px] text-red-700" />,
  },
];

export default Categories;