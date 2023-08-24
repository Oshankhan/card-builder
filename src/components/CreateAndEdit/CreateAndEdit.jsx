import React, { useState } from "react";
import { itemList } from "../../data";
import CreateNew from "./Create/CreateNew.jsx";
import GroupSelector from "./Select/GroupSelect.jsx";

const CreateAndEdit = () => {
  const [createNew, setCreateNew] = useState(true);
  return (
    <div>
      {" "}
      <div>
        {itemList.length === 0 || createNew ? (
          <>
            <CreateNew />
          </>
        ) : (
          <>
            <GroupSelector itemList={itemList} />
          </>
        )}
      </div>
    </div>
  );
};

export default CreateAndEdit;
