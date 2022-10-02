import React, {
  useState,
  useEffect,
  useCallback,
  useTransition,
  Suspense,
} from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../actions/user/getUsersAction";
//components
import Users from "../components/user/Users";
import CustomPagination from "../components/basic/CustomPagination";
import Loading from "../components/basic/Loading";

function UserPage() {
  const dispatch = useDispatch();
  // getting token
  const auth = useSelector((state) => state.auth.access);
  // manage pagination and search
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [inTransition, startTransition] = useTransition();

  const users = useSelector((state) => state.users.users);
  const total = useSelector((state) => state.users.pages);
  const loading = useSelector((state) => state.users.loading);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);


  const load = (page, search) => {
    dispatch(getUsersAction(auth.access_token, page, search));
  };

  useEffect(() => {
    startTransition(() => {
      load(page, search);
    });
  }, [page, search, auth.access_token]);

  return (
    <>
      <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
        User
      </h1>

      <div className="flex flex-wrap mx-6 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Search
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Enter first name or last name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {inTransition && !loading ? (
        <div className="d-flex justify-content-center">
          <Loading type={"spin"} color={"#0000ff"} />
        </div>
      ) : null}
      {users.length > 0 ? (
        <Suspense fallback={<Loading type={"spin"} color={"#0000ff"} />}>
          <Users users={users} />
        </Suspense>
      ) : (
        <div className="d-flex justify-content-center">
          <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
            No Users Found
          </h1>
        </div>
      )}
      {total > 1 && loading == false && (
        <div className="d-flex justify-content-center">
          <CustomPagination
            total={total}
            current={page}
            onChangePage={handleChangePage}
          />
        </div>
      )}
    </>
  );
}

export default UserPage;
