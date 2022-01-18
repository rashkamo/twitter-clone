import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
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
  LogoutIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Bottombar() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center sm:hidden justify-center bg-[#000] rounded-t-[10px] space-x-10 ">
      <SidebarLink text="Home" Icon={HomeIcon} active />

      <SidebarLink text="Notifications" Icon={BellIcon} />
      <Link href="/user">
        <a>
          <SidebarLink text="Profile" Icon={UserIcon} />
        </a>
      </Link>
      <div
        className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto "
        onClick={signOut}
      >
        <SidebarLink text="More" Icon={LogoutIcon} />
      </div>
    </div>
  );
}

export default Bottombar;
