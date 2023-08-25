import React, { useState } from "react";
import CreateNew from "./Create/CreateNew.jsx";
import GroupSelector from "./Select/GroupSelect.jsx";
import { useSelector } from "react-redux";

const CreateAndEdit = () => {
  const itemList = useSelector((state) => state.cards.itemList);
  const createNew = useSelector((state) => state.details.createNewButton);

  return (
    <div>
      {itemList.length === 0 || createNew ? (
        <>
          <CreateNew />
        </>
      ) : (
        <>
          <GroupSelector />
        </>
      )}
    </div>
  );
};

export default CreateAndEdit;
