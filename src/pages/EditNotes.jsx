import React, { Component } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import AddNotesFieldInput from "../components/AddNotesFieldInput";
import BtnNotes from "../components/BtnNotes";
import { MdBrowserUpdated } from "react-icons/md";
import { editNote, getNote } from "../utils/local-data";

const EditNotesWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dataNotesById = getNote(id);

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="pt-20">
        <div className="pb-10">
          <Navigation />
          <EditNotes
            id={id}
            dataNotes={dataNotesById}
            navigation={navigateToHome}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

class EditNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.dataNotes.title,
      body: this.props.dataNotes.body,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  onTitleChange({ target }) {
    this.setState(() => {
      return {
        title: target.value,
      };
    });
  }

  onBodyChange({ target }) {
    this.setState(() => {
      return {
        body: target.value,
      };
    });
  }

  handlerSubmit() {
    const dataPost = {
      id: this.props.dataNotes.id,
      title: this.state.title,
      body: this.state.body,
    };

    editNote(dataPost);
  }

  render() {
    return (
      <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8 pt-8 sm:pt-10 lg:pt-12">
        <AddNotesFieldInput
          title={this.state.title}
          body={this.state.body}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          isUpdate={true}
        />
        <div className="fixed bottom-7 right-7 z-[99]">
          <BtnNotes
            Icon={MdBrowserUpdated}
            handler={() => {
              this.handlerSubmit();
              this.props.navigation();
            }}
          />
        </div>
      </div>
    );
  }
}

export default EditNotesWrapper;

EditNotes.propTypes = {
  id: PropTypes.string.isRequired,
  navigation: PropTypes.func.isRequired,
  dataNotes: PropTypes.object.isRequired,
};
