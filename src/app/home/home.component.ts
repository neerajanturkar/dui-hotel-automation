import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PublishService } from "../publish.service";
import { SessionService } from "../session.service";
import { toast, Modal } from "materialize-css";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  sessionId: any;
  tbDoorLight: Boolean;
  tbMainLight: Boolean;
  profile: any;
  noteModal: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private publishService: PublishService,
    private sessionService: SessionService
  ) {}
  mainLight: any;
  doorLight: any;
  temperatureValue: any;
  fanspeedValue: any;
  note: any;

  ngOnInit() {
    const elems = document.querySelector(".modal");
    this.noteModal = M.Modal.init(elems);
    this.sessionId = this.activatedRoute.snapshot.queryParams.id;
    this.sessionService
      .getSession(this.sessionId)
      .then((response) => {
        this.mainLight = response["data"]["session"]["profile"]["tbMainLight"];
        this.doorLight = response["data"]["session"]["profile"]["tbDoorLight"];
        this.temperatureValue =
          response["data"]["session"]["profile"]["tvTemperatureValue"];
        this.fanspeedValue =
          response["data"]["session"]["profile"]["tvFanSpeedValue"];
        this.note = response["data"]["session"]["profile"]["edNote"];
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  doorLightClick(event) {
    let data = {
      action: "BOOLEAN::" + event.path[0].id + "::" + this.doorLight,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }

  mainLightClick(event) {
    let data = {
      action: "BOOLEAN::" + event.path[0].id + "::" + this.mainLight,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  increaseTemperature(event) {
    this.temperatureValue = this.temperatureValue + 1;
    let data = {
      action: "INTEGER::tvTemperatureValue::" + this.temperatureValue,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  decreaseTemperature(event) {
    this.temperatureValue = this.temperatureValue - 1;
    let data = {
      action: "INTEGER::tvTemperatureValue::" + this.temperatureValue,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  increaseFanspeed(event) {
    this.fanspeedValue = this.fanspeedValue + 1;
    let data = {
      action: "INTEGER::tvFanSpeedValue::" + this.fanspeedValue,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  decreaseFanspeed(event) {
    this.fanspeedValue = this.fanspeedValue - 1;
    let data = {
      action: "INTEGER::tvFanSpeedValue::" + this.fanspeedValue,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
  onAddNoteClick() {
    console.log("on add note click");
    this.noteModal.open();
  }
  confirmAddNote() {
    let data = {
      action: "TEXT::edNote::" + this.note,
    };
    this.publishService
      .publishAction(this.sessionId, data)
      .then((response) => {
        // toast({ html: "Success" });
      })
      .catch((e) => {
        toast({ html: "Failed" });
      });
  }
}
