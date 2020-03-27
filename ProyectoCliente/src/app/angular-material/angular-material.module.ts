import { NgModule } from "@angular/core";
import { 
    MatCardModule, 
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';


@NgModule({
    imports : [
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports : [
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class AngularMaterialModule { }