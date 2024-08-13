import React from "react";

interface ProfileDropdownProps {
  user: any;
  logOut: () => Promise<void>;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user, logOut }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
      <div className="p-4">
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>
      <div className="border-t">
        <button
          onClick={logOut}
          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
