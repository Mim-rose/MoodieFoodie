import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { CiBowlNoodles } from "react-icons/ci";
import { PiBowlFood, PiHamburger, PiWine } from "react-icons/pi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { LuSoup, LuDessert } from "react-icons/lu";
import { GiRiceCooker, GiChopsticks, GiNoodles } from "react-icons/gi";
import { RiDrinksFill, RiDrinksLine } from "react-icons/ri";
import { BiDrink, BiSolidBowlRice } from "react-icons/bi";
import { LuSalad, LuIceCreamBowl } from "react-icons/lu";

import React from "react";

const Categories = [
  {
    id: 1,
    name: "all",
    icon: <TiThSmallOutline className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdOutlineFreeBreakfast className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 3,
    name: "soups",
    icon: <LuSoup className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: (
      <CiBowlNoodles className="h-[50px] w-[50px] text-orange-600 text-2xl font-bold" />
    ),
  },
  {
    id: 5,
    name: "main_course",
    icon: <PiBowlFood className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <LiaPizzaSliceSolid className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <PiHamburger className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 8,
    name: "dessert",
    icon: <LuIceCreamBowl className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 9,
    name: "drink",
    icon: <BiDrink className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 10,
    name: "juices",
    icon: <RiDrinksLine className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 11,
    name: "biriyani",
    icon: <BiSolidBowlRice className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 12,
    name: "korean",
    icon: <GiChopsticks className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 13,
    name: "chinese",
    icon: <GiNoodles className="h-[50px] w-[50px] text-orange-600" />,
  },
  {
    id: 14,
    name: "salad",
    icon: <LuSalad className="h-[50px] w-[50px] text-orange-600" />,
  },
];

export default Categories;