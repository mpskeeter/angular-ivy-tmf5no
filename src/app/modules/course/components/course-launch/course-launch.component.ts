import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { map } from 'rxjs/operators';
// import { CourseService, PlayerService } from '../../../shared';
import { PlayerService } from '../../../shared';

@Component({
  selector: 'app-course-launch',
  templateUrl: './course-launch.component.html',
})
export class CourseLaunchComponent implements OnInit {
  constructor(
    // public service: CourseService,
    public player: PlayerService,
    // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .pipe(
    //     // tap((params: ParamMap) => console.log(params)),
    //     map((params: ParamMap) => {
    //       const id = parseInt(params.get('id'), 10);
    //       this.service.get(id);
    //     })
    //   )
    //   .subscribe();
  }
}
