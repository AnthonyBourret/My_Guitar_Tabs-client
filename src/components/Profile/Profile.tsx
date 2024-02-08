import React from 'react';
import Header from '../Header/Header';
import EditProfileButton from "../CustomComponents/EditProfileButton";
import EditAvatarModal from "../Modals/EditAvatarModal";
import EditMailModal from "../Modals/EditMailModal";
import EditUsernameModal from "../Modals/EditUsernameModal";
import DeleteAccountModal from "../Modals/DeleteAccountModal";
import LoaderProfile from "../Loaders/LoaderProfile";

function Profile() {
  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col gap-8 w-[90%] items-center justify-center bg-base-100 border border-primary rounded-box p-6 min-[590px]:w-1/2 min-[590px]:px-8 lg:w-2/5">
        <div className="w-full">
          <h1 className="text-2xl font-semibold self-start">My profile</h1>
          <div className="divider mb-0"></div>
        </div>

        {/* Loader */}
        {/* <LoaderProfile /> */}

        {/* Avatar & Username */}
        <div className="flex flex-row-reverse gap-2 items-center justify-between w-full min-[590px]:gap-8">
          <div className="avatar items-center">
            <div className="w-14 rounded-full border border-primary">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <div className="absolute top-8 left-10">
                <EditProfileButton modalName="avatar_modal" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">Username</h1>
            <EditProfileButton modalName="username_modal" />
          </div>
        </div>

        {/* User info */}
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Mail : </h2>
            <div className="flex items-center gap-2">
              <p>admin@admin.com</p>
              <EditProfileButton modalName="mail_modal" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Songs added : </h2>
            <p>4</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Songs learned : </h2>
            <p>1</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Songs in progress : </h2>
            <p>2</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Songs to learn : </h2>
            <p>1</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Member since : </h2>
            <p>01/02/2024</p>
          </div>
        </div>

        {/* Delete account */}
        <button
          type="button"
          className="btn btn-sm w-fit btn-primary self-center"
          onClick={() => {
            if (document) {
              (document.getElementById("delete_modal") as HTMLDialogElement).showModal();
            }
          }}
        >
          Delete my account
        </button>

        {/* Modals */}
        <EditAvatarModal />
        <EditMailModal />
        <EditUsernameModal />
        <DeleteAccountModal />

      </div>
    </div>
  );
};

export default Profile;