import SidebarLink from "./SidebarLink";
import { HomeIcon, LogoutIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Bottombar() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center sm:hidden justify-center bg-[#000] rounded-t-[10px] space-x-1 ">
      <SidebarLink text="Home" Icon={HomeIcon} active />

      <SidebarLink text="Explore" Icon={HashtagIcon} />
      <SidebarLink text="Notifications" Icon={BellIcon} />
      <SidebarLink text="Messages" Icon={InboxIcon} />
      <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarLink text="Lists" Icon={ClipboardListIcon} />
      <SidebarLink text="Profile" Icon={UserIcon} />
      <div
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto "
        onClick={signOut}
      >
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
    </div>
  );
}

export default Bottombar;
