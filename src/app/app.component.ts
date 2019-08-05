import { Component, OnInit, AfterViewInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastType } from '../app/model/toast-type';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import { ToastService, MessageShared, SharedNotificationsMsgService, SharedNotificationsCountService, SharedPendingInscriptionsService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private toastService: ToastService;
  private messageShared: MessageShared;
  private sharedNotifications: SharedNotificationsMsgService;
  private notificationsCountService: SharedNotificationsCountService;
  private pendingInscriptionsService: SharedPendingInscriptionsService;

  
  title = 'ClientWebservice';
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

  ngOnInit() { }

}