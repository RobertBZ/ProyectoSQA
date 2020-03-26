import { NgModule } from "@angular/core";
import {
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports : [
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule
    ],
    exports : [
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule
    ]
})

export class AngularMaterialModule { }