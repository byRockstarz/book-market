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

  async getBookById(bookId) {
    try {
      const response = await axios.get(`${this.url}/${bookId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(bookId) {
    try {
      const response = await axios.delete(`${this.url}/${bookId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateRating(bookId, rating) {
    try {
      const response = await axios.put(`${this.url}/rating/${bookId}`, {
        rating: rating,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const BookService = new Book();
export default BookService;
