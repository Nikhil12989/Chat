import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer ">
        <div className="avatar online ">
          <div className="w-full">
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
           <div className="flex flex-col flex-1">
            <p className="font-bold text-gray-200 ">John Doe</p>
            {/* <span className="text-xl"></span> */}
           </div>
        </div>
      </div>
      <hr />
      <div></div>
    </>
  );
};

export default Conversation;
