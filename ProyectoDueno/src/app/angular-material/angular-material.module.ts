import { NgModule } from "@angular/core";
import {
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports : [
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule
    ],
    exports : [
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule
    ]
})

export class AngularMaterialModule { }