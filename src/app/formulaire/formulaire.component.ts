import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  beerForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.beerForm = this.createBeerForm();
  }

  createBeerForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
    })
  }

  addBeer(): void {
    console.log(this.beerForm.getRawValue());
    
  }

  // onSubmit(f){
  //   console.log(f.form.value);
  // }
}
