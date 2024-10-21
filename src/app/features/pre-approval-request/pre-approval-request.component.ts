import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-approval-request',
  templateUrl: './pre-approval-request.component.html',
  styleUrls: ['./pre-approval-request.component.css']
})
export class PreApprovalRequestComponent {
  requestTypes = ['علاج شهري', 'عمليات', 'تحاليل طبية'];
  selectedRequestType: string = '';
  description: string = '';

  submitRequest() {
    // يمكنك هنا تنفيذ عملية الإرسال (مثل استدعاء خدمة)
    console.log('Request Type:', this.selectedRequestType);
    console.log('Description:', this.description);
  }
}
