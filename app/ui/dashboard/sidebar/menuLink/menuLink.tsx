"use client";
import { IMenuItemDetail } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: IMenuItemDetail;
};

const MenuLink = ({ item }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-3 my-1 mx-0 hover:bg-gray-700 hover:rounded-xl ${
        pathname === item.path && "bg-gray-700 rounded-xl"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
