import axios from "axios";

const HttpMethods = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
};
interface IData {
  query: string;
}

const token: string = "8c483a8860c50cc06f458adcdabab86b545c4e80";

export class Api {
  static async get(url: string, data?: string) {
    return this.makeRequest(HttpMethods.GET, url, data);
  }

  static async post(url: string, data: IData) {
    return this.makeRequest(HttpMethods.POST, url, data);
  }

  static async patch(url: string, data?: object) {
    return this.makeRequest(HttpMethods.PATCH, url, data);
  }

  static async delete(url: string, data?: object) {
    return this.makeRequest(HttpMethods.DELETE, url, data);
  }

  private static makeRequest(method: any, url: string, data: any = {}) {

    return axios({
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      url: url,
      data,
    })
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
