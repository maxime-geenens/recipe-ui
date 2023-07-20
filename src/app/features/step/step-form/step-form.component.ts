import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, fromEvent, merge, debounceTime } from 'rxjs';
import { Step } from 'src/app/models/step.model';
import { GenericValidator } from 'src/app/shared/helpers/generic-validator';
import { StepService } from 'src/app/shared/services/step.service';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css'],
})
export class StepFormComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  title: String = 'Steps Edit';
  errorMessage!: String;
  stepsForm!: FormGroup;
  stepList!: Step[];

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get steps(): FormArray {
    return this.stepsForm.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder, private stepService: StepService) {
    this.validationMessages = {
      position: {
        required: 'Step name is required.',
      },
      description: {
        required: 'Step description is required.',
        minlength: 'Step description must be at least 10 characters.',
        maxlength: 'Step description cannot exceed 250 characters.',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.stepsForm = this.fb.group({
      steps: this.fb.array([]),
    });
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.stepsForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.stepsForm
        );
      });
  }

  addStep() {
    const stepForm = this.fb.group({
      position: ['', Validators.required],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
    });
    this.steps.push(stepForm);
  }

  removeStep(stepIndex: number) {
    this.steps.removeAt(stepIndex);
  }

  saveSteps() {
    // TODO
  }
}
