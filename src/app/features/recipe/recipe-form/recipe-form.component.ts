import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, fromEvent, merge, Observable } from 'rxjs';

import { Type } from 'src/app/models/types/type.model';
import { GenericValidator } from 'src/app/shared/helpers/generic-validator';
import { TypesService } from 'src/app/shared/services/references/types.service';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  title: String = '';
  errorMessage: String = '';
  recipeForm!: FormGroup;

  recipe!: Recipe;
  typeList: Type[] = [];

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private typeService: TypesService
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      rName: {
        required: 'Recipe name is required.',
        minlength: 'Recipe name must be at least three characters.',
        maxlength: 'Recipe name cannot exceed 50 characters.',
      },
      rType: {
        required: 'Recipe type is required.',
      },
      rDesc: {
        required: 'Recipe description is required.',
        minlength: 'Recipe description must be at least 30 characters.',
        maxlength: 'Recipe name cannot exceed 250 characters.',
      },
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      type: ['', Validators.required],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(250),
        ],
      ],
    });

    this.typeService.getRecipeTypeList('FR').subscribe({
      next: (r: Type[]) => (this.typeList = r),
      error: (e) => console.log(e),
    });

    if (this.route.snapshot.paramMap.get('id') !== '0') {
      const id = this.route.snapshot.paramMap.get('id');
      this.getRecipe(id);
    } else {
      this.title = 'Create a new recipe';
      console.log('Id url param = 0, creating a new Recipe.');
    }

    this.typeService.getRecipeTypeList('FR').subscribe({
      next: (r) => (this.typeList = r),
      error: (e) => console.log(e),
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
    merge(this.recipeForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.recipeForm
        );
      });
  }

  getRecipe(id: any) {
    this.recipeService.getRecipe(id).subscribe({
      next: (r: Recipe) => this.displayRecipe(r),
      error: (e) => console.log(e),
    });
    console.log('this.recipe :: ' + this.recipe);
  }

  displayRecipe(recipe: Recipe): void {
    if (this.recipeForm) {
      this.recipeForm.reset();
    }
    this.recipe = recipe;
    this.title = `Edit Recipe : ${this.recipe.name}`;

    // Update the data on the form
    this.recipeForm.patchValue({
      rName: this.recipe.name,
      rType: this.recipe.type,
      rDesc: this.recipe.description,
    });
  }

  saveRecipe(): void {
    if (this.recipeForm.valid) {
      if (this.recipeForm.dirty) {
        const r: Recipe = { ...this.recipe, ...this.recipeForm.value };
        r.lang = 'FR';

        console.log(r);

        if (r.id == null) {
          this.recipeService.createRecipe(r).subscribe({
            next: () => this.onSaveComplete(),
            error: (err) => (this.errorMessage = err),
          });
        } else {
          this.recipeService.updateRecipe(r).subscribe({
            next: () => this.onSaveComplete(),
            error: (err) => (this.errorMessage = err),
          });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.recipeForm.reset();
    this.router.navigate(['/recipes/list']);
  }

  get f() {
    return this.recipeForm.controls;
  }
}
