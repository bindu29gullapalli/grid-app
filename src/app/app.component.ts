import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   // Row Data: The data to be displayed.
  // rowData = [
    // { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota", model: "Corolla", price: 29600, electric: false },
	// { make: "Tesla1", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford1", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota2", model: "Corolla", price: 29600, electric: false },
	// { make: "Tesla2", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford2", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota3", model: "Corolla", price: 29600, electric: false },
	// { make: "Tesla3", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford3", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota3", model: "Corolla", price: 29600, electric: false },
  // ];

  // // Column Definitions: Defines & controls grid columns.
  // colDefs = [
    // { field: "make" , sortable: true,filter: true },
    // { field: "model" , sortable: true },
    // { field: "price" , sortable: true },
    // { field: "electric", sortable: true }
  // ];

}
