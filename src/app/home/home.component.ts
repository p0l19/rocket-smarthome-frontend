import { Component, OnInit } from '@angular/core';
import { PlugServiceService } from '../plug-service.service';
import { Plug } from "../model/plug";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PlugServiceService]
})
export class HomeComponent implements OnInit{

  constructor(private plugService: PlugServiceService, private logger: NGXLogger) {
    this.plugs = [];
  }

  ngOnInit() {
    this.plugService.getPlugs().subscribe({
      next: (plugs) => (this.plugs = plugs),
      error: (err) => (this.plugs = []),
    });
    this.plugs.forEach(plug => {
      this.logger.warn(plug);
    });
  }

  plugs: Plug[];
}
