import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PublishService {
  constructor(private http: HttpClient) {}
  publishAction(sessionId: any, action: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .put(
        environment.serverHostName +
          ":" +
          environment.serverPort +
          "/api/v1/session/" +
          sessionId +
          "/publish",
        action,
        { headers: headers }
      )
      .toPromise();
  }
}
