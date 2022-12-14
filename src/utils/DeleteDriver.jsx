import { BASE_URL, DRIVERFORMS } from "constants/apiKeys";
import axios from "axios";

async function DeleteDriver(id) {

  const options = {
    method: "DELETE",
    url: BASE_URL + DRIVERFORMS + "/" + id,
  };

  try {
    const response = await axios(options);
    const data = response.data;
    if (data) {
      return { success: "Success", data: data };
    }
    if (!data) {
      return { failed: "Failed", data: data };
    }
  } catch (error) {
    return { sucess: false, error: error };
  }
}

export default DeleteDriver;