import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
  } from '@angular/material';

@NgModule({
    imports : [
        CommonModule, 
        MatToolbarModule,
        MatButtonModule, 
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports : [
        CommonModule,
        MatToolbarModule, 
        MatButtonModule, 
        MatCardModule, 
        MatInputModule, 
        MatDialogModule, 
        MatTableModule, 
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ]
})

export class AngularMaterialModule { }