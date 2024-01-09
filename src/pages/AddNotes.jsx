import React, { Component } from "react";
import Navigation from "../components/Navigation";
import BtnNotes from "../components/BtnNotes";
import { FaClipboardCheck } from "react-icons/fa6";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddNotesFieldInput from "../components/AddNotesFieldInput";

const AddNotesWrapper = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return <AddNotes navigation={navigateToHome} />;
};

class AddNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
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
      title: this.state.title,
      body: this.state.body,
    };

    addNote(dataPost);
  }

  render() {
    return (
      <div className="mt-20">
        <div className="mb-10">
          <Navigation />
          <div className="relative p-3 flex justify-center items-center flex-col space-y-14 sm:space-y-20 w-full mt-8 pt-8 sm:pt-10 lg:pt-12">
            <AddNotesFieldInput
              title={this.state.title}
              body={this.state.body}
              onTitleChange={this.onTitleChange}
              onBodyChange={this.onBodyChange}
              isUpdate={false}
            />
            <div className="fixed bottom-7 right-7 z-[99]">
              <BtnNotes
                Icon={FaClipboardCheck}
                handler={() => {
                  this.handlerSubmit();
                  this.props.navigation();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNotesWrapper;

AddNotes.propTypes = {
  navigation: PropTypes.func.isRequired,
};
