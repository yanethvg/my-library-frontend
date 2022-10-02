import React, {
  useState,
  useEffect,
  useCallback,
  useTransition,
  Suspense,
} from "react";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getStudentsAction } from "../actions/student/getStudentsAction";

//components
import Students from "../components/student/Students";
import CustomPagination from "../components/basic/CustomPagination";
import Loading from "../components/basic/Loading";

function StudentPage() {
  const dispatch = useDispatch();
  // getting token
  const auth = useSelector((state) => state.auth.access);
  const permissions = useSelector((state) => state.auth.access.permissions);

  // manage pagination and search
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [inTransition, startTransition] = useTransition();

  const students = useSelector((state) => state.students.students);
  const total = useSelector((state) => state.students.pages);
  const loading = useSelector((state) => state.students.loading);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    startTransition(() => {
      load(page, search);
    });
  }, [page, search, auth.access_token]);

  const load = (page, search) => {
    dispatch(getStudentsAction(auth.access_token, page, search));
  };

  const nav = useNavigate();

  const handleShow = (id) => {
    nav(`/books-student/${id}`);
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
       Students
      </h1>

      <div className="flex flex-wrap -mx-3 mb-6">
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
        {students.length > 0 ? (
          <Suspense fallback={<Loading type={"spin"} color={"#0000ff"} />}>
            <Students
              students={students}
              handleShow={handleShow}
            />
          </Suspense>
        ) : (
          <div className="d-flex justify-content-center">
            <h1 className="font-bold text-2xl text-blue-900 my-6 text-center">
              No Students Found
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

export default StudentPage;
