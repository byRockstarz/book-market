import { apiUrl } from "../configs/endpoint";
import axios from "axios";

class Book {
  url = `${apiUrl}/books`;

  async create(data) {
    try {
      const response = await axios.post(this.url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getBooks() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const BookService = new Book();
export default BookService;
