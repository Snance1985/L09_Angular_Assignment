import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    {
      id: 1,
      title: "Track Athlete",
      description: "Enhanced acrobatic skills and reflexes.",
      duration: "2 years",
      employer: "United States Olympics Commission"
    },
    {
      id: 2,
      title: "Racecar Driver",
      description: "Can handle a vehicle at high speeds, sometimes over 200 miles per hour for certain types of races. ",
      duration: "6 years",
      employer: "The National Association for Stock Car Auto Racing, LLC (NASCAR)"
    },
    {
      id: 3,
      title: "Food Deliverer",
      description: "Excellent communication and organizational skills. Strong interpersonal and problem-solving abilities. Familiarity with local streets, neighborhoods, and routes.",
      duration: "3 years",
      employer: "Dominoes"
    },
  ];

  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJob(jobId: number): Observable<any> {
    return of(this.jobs.find((job) => job.id === jobId));
  }
}