function SidebarLink({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9d9] flex items-center justify-center xl:justify-start  space-x-1.5 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-5" />
      <span className="hidden xl:inline font-semibold">{text}</span>
    </div>
  );
}

export default SidebarLink;
