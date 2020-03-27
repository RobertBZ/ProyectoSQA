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
    MatInputModule,
    MatDialogModule
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
        MatInputModule,
        MatDialogModule
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
        MatInputModule,
        MatDialogModule
    ]
})

export class AngularMaterialModule { }