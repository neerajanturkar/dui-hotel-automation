import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PublishService } from "./publish.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "hotel-automation";
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private publishService: PublishService
  ) {}
  ngOnInit() {
    document.body.style.zoom = "180%";
  }
}
