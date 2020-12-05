import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor(private http: HttpClient) {}
  getSession(id: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .get(
        environment.serverHostName +
          ":" +
          environment.serverPort +
          "/api/v1/session/" +
          id +
          "/",
        { headers: headers }
      )
      .toPromise();
  }
}
