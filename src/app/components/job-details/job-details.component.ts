import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: any; 

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const jobId = parseInt(this.route.snapshot.paramMap.get('jobId')!);
  
    this.jobService.getJob(jobId).subscribe((job) => {
      this.job = job;
    });
  }
}