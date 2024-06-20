import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import for confirmation dialog
import "react-confirm-alert/src/react-confirm-alert.css"; // Import CSS for confirmation dialog styling
import deleteIcon from "../assets/images/svg/tableIcon/material-symbols_delete-outline-rounded.svg"; // Import delete icon
import axios from "axios"; // Import axios for HTTP requests

// Define the types for props and state
type PopperProps = {
  id: number;
};

type PopperState = {
  isDeleting: boolean;
};

class Popper extends React.Component<PopperProps, PopperState> {
  constructor(props: PopperProps) {
    super(props);
    this.state = {
      isDeleting: false, // Initial state isDeleting set to false
    };
  }

  // Method to handle the delete action
  handleDelete = async () => {
    const { id } = this.props; // Get id from props
    this.setState({ isDeleting: true }); // Set isDeleting to true to disable interactions
    try {
      await axios
        .delete(
          `https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}` // API endpoint to delete the item
        )
        .then((response) => {
          alert("Deleted campaign successfully"); // Alert on successful deletion
          console.log(response); // Log the response
        });
    } catch (error) {
      alert("Error deleting the item"); // Alert on error
      console.error("There was an error deleting the item!", error); // Log the error
    } finally {
      this.setState({ isDeleting: false }); // Reset isDeleting to false
    }
  };

  // Method to show confirmation dialog
  submit = () => {
    confirmAlert({
      title: "Confirm to delete", // Title of the confirmation dialog
      message: "Are you sure you want to delete this item?", // Message in the confirmation dialog
      buttons: [
        {
          label: "Yes", // Label for the confirmation button
          onClick: this.handleDelete, // Action to perform on confirmation
        },
        {
          label: "No", // Label for the cancel button
          // No action needed on 'No'
        },
      ],
    });
  };

  render() {
    const { isDeleting } = this.state; // Get isDeleting from state
    return (
      <div
        className="container"
        style={{
          cursor: isDeleting ? "not-allowed" : "pointer", // Change cursor based on isDeleting
          pointerEvents: isDeleting ? "none" : "auto", // Disable pointer events based on isDeleting
        }}
      >
        <div onClick={this.submit}>
          <img src={deleteIcon} alt="delete icon" /> {/* Display delete icon */}
        </div>
      </div>
    );
  }
}

export default Popper; // Export the Popper component
