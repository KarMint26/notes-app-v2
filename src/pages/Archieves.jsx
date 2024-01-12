import React from "react";
import ActiveNoteSearch from "../components/ActiveNoteSearch";
import CardContainer from "../components/CardContainer";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import BtnNotes from "../components/BtnNotes";
import { getArchivedNotes } from "../utils/network-data";

const Archieves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [dataNotes, setDataNotes] = React.useState([]);
  const q = searchParams.get("q");

  const [keyword, setKeyword] = React.useState(() => {
    return q || "";
  });
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/notes/new");
  };

  React.useEffect(() => {
    const getDataNotes = () => {
      getArchivedNotes().then(({ data }) => {
        if (data) {
          if(data.length > 0){
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
          } else {
            setIsLoading(false);
          }
        }

        setDataNotes(data);
      });
    };

    getDataNotes();
  }, []);

  const onKeywordParams = (q) => {
    let params = {};
    if (q !== null) {
      params = { q };
    }
    setSearchParams(params);
  };

  const onKeywordChange = (event) => {
    setKeyword(event.target.value);

    // If event.target.value is empty, remove the "q" parameter from the URL
    if (event.target.value === "") {
      onKeywordParams(null);
    } else {
      onKeywordParams(event.target.value);
    }
  };

  const notesByQuery = dataNotes.filter((data) => data.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <React.Fragment>
      <div className="pt-20">
        <div className="pb-10">
          <div className="p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full">
            <ActiveNoteSearch value={keyword} onChangeValue={onKeywordChange} isArchieved={false} />
            {isLoading ? (
              <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 self-start px-8 sm:px-14 lg:px-28">
                {notesByQuery.map((data) => (
                  <div key={data.id} className="skeleton w-[300px] h-[250px] sm:h-[300px]"></div>
                ))}
              </div>
            ) : (
              <CardContainer notes={notesByQuery} isArchievePage={false} />
            )}
            <div className="fixed bottom-7 right-7 z-[99]">
              <BtnNotes
                Icon={MdAssignmentAdd}
                handler={() => {
                  navigateTo();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Archieves;
