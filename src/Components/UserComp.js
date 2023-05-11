import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersReq } from "../Redux/ActionTypes/UserActionTypes";
const UserComp = () => {
  const users = useSelector((state) => state.users);
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  // console.log(usersList);
  useEffect(() => {
    dispatch(fetchUsersReq());
  }, [dispatch]);
  return (
    <>
      <div>User Details</div>
      <ul>
        {users.length !== 0
          ? users.map((user) => {
              return (
                <li>
                  {user.name}.{user.id}
                </li>
              );
            })
          : []}
      </ul>
    </>
  );
};

export default UserComp;
