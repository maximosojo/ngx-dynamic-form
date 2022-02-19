import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../models/form.models';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './form.component.html'
})
export class NgxDynamicFormComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  get f() { return this.form.controls; }
}