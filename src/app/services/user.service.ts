import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { API_URL } from "../../settings";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = API_URL;
  }

  registrarUsuario(): any {}
}
