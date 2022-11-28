import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalRef } from '@independer/ng-modal';
import { first } from 'rxjs';
import { LTC_Customer } from 'src/app/models/customer';
import { SalesTranService } from '../services/sales-tran.service'; 
import { TicketObjService } from '../ticket-obj.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})

export class CustomerSearchComponent implements OnInit {

  data: string = '';
  constructor(private _tktObjSvc: TicketObjService, private modal: ModalRef, private _saleSvc: SalesTranService) { }
  CustomerList: LTC_Customer[] = [];

  firstName: string = '';
  lastName: string = '';
  telephone: string = '';

  public strongErrMessage: string = '';
  public errMessage: string = '';
  public showErrMsg: boolean = false;
  ngOnInit(): void {
  }

  search() {
    if(this.firstName == '' && this.lastName == '' && this.telephone == '') {
      this.strongErrMessage = 'Validation Error';
      this.errMessage = 'Either one of the First Name, Last Name or Telephone shall be entered for Search. Please verify.';
      this.showErrMsg = true;
      return;
    }
    this._saleSvc.getCustomerLookup(this.firstName, this.lastName, this.telephone, 10).subscribe(data => {
      this.CustomerList = data.customers;
    });
  }

  cancel() {
    this.modal.close('');
  }

  newcust() {}

  customerSelected(custId: number) {
    this._tktObjSvc.TktObj.customerId = custId;
    this.cancel();
  }
}
