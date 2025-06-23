import Image from "next/image";

import search from "../assets/images/header/search.svg";
import message from "../assets/images/header/message-text.svg";
import notification from "../assets/images/header/notification.svg";
import cart from "../assets/images/header/shopping-cart.svg";
import translate from "../assets/images/header/translate.svg";

export const iconMap: Record<string, JSX.Element> = {
  search: (
    <Image
      src={search}
      alt="search icon"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
  bell: (
    <Image
      src={notification}
      alt="notification icon"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
  "message-circle": (
    <Image
      src={message}
      alt="message icon"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
  language: (
    <Image
      src={translate}
      alt="language icon"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
  "shopping-cart": (
    <Image
      src={cart}
      alt="shopping cart icon"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  ),
};

export const getIcon = (iconName?: string) => iconName && iconMap[iconName];
