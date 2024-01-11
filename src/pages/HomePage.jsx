import React, { Component } from "react";
import ActiveNoteSearch from "../components/ActiveNoteSearch";
import { getActiveNotes } from "../utils/local-data";
import CardContainer from "../components/CardContainer";
import { useSearchParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import { MdAssignmentAdd } from "react-icons/md";
import BtnNotes from "../components/BtnNotes";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/notes/new");
  };

  const onKeywordParams = (q) => {
    let params = {};
    if (q !== null) {
      params = { q };
    }
    setSearchParams(params);
  };

  return (
    <React.Fragment>
      <div className="pt-20">
        <div className="pb-10">
          <Navigation />
          <HomePage
            onnKeywordParams={onKeywordParams}
            defaultKeyword={q}
            navigation={navigateTo}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || "",
      notes: getActiveNotes(),
    };

    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  onKeywordChange(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });

    // Jika event.target.value kosong, hapus parameter 'q' dari URL
    if (event.target.value === "") {
      this.props.onnKeywordParams(null);
    } else {
      this.props.onnKeywordParams(event.target.value);
    }
  }

  render() {
    const notesByQuery = this.state.notes.filter((data) =>
      data.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <div className="p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full">
        <ActiveNoteSearch
          value={this.state.keyword}
          onChangeValue={this.onKeywordChange}
          isArchieved={false}
        />
        <CardContainer notes={notesByQuery} isArchievePage={false} />
        <div className="fixed bottom-7 right-7 z-[99]">
          <BtnNotes
            Icon={MdAssignmentAdd}
            handler={() => {
              this.props.navigation();
            }}
          />
        </div>
      </div>
    );
  }
}

export default HomePageWrapper;

HomePage.propTypes = {
  onnKeywordParams: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};
